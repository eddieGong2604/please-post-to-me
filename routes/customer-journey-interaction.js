import express from 'express';
import mockJourneyInteractions from "../data/mockCustomerJourneyInteractions.js";

const router = express.Router();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

router.get('/', async (req, res) => {
    const { skip = 0, limit = 100, filter, public_party_id } = req.query;
    if(!public_party_id || public_party_id.includes("NOINTERACTION000")) return res.json({ totalCount: 0, journeyInteractions: [] });

    const filterArray = JSON.parse(filter);
    // Convert skip and limit to integers
    const skipInt = parseInt(skip, 10);
    const limitInt = parseInt(limit, 10);

    // Filter by pipeline_name if provided
    let filteredInteractions = mockJourneyInteractions;

    if (filterArray && filterArray.length == 1 && filterArray[0].value) {
        filteredInteractions = filteredInteractions.filter(interaction =>
            interaction.pipeline_name.startsWith(filterArray[0].value)
        );
    }

    // Get the total count after filtering
    const totalCount = filteredInteractions.length;

    // Apply skip and limit
    const paginatedInteractions = filteredInteractions.slice(skipInt, skipInt + limitInt);

    res.json({ totalCount, journeyInteractions: paginatedInteractions });
});

export default router;
