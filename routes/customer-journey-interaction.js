import express from 'express';
import mockJourneyInteractions from "../data/mockCustomerJourneyInteractions.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ totalCount: 100, journeyInteractions: mockJourneyInteractions });
});

export default router;
