import express from 'express';
import mockJourneyInteractions from "../data/mockCustomerJourneyInteractions.js";

const router = express.Router();

router.get('/', (req, res) => {
    const { skip = 0, limit = 100, pipeline_name } = req.query;

    // Convert skip and limit to integers
    const skipInt = parseInt(skip, 10);
    const limitInt = parseInt(limit, 10);

    // Filter by pipeline_name if provided
    let filteredInteractions = mockJourneyInteractions;

    if (pipeline_name) {
        const pipelineNames = pipeline_name.split(',').map(name => name.trim());
        filteredInteractions = filteredInteractions.filter(interaction =>
            pipelineNames.includes(interaction.pipeline_name)
        );
    }

    // Get the total count after filtering
    const totalCount = filteredInteractions.length;

    // Apply skip and limit
    const paginatedInteractions = filteredInteractions.slice(skipInt, skipInt + limitInt);

    res.json({ totalCount, journeyInteractions: paginatedInteractions });
});

export default router;
