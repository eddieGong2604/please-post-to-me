// routes/geofactors.js
import express from 'express';
import mockGeofactors from '../data/mockGeofactors.js';

const router = express.Router();

router.get('/', (req, res) => {
    const { gnaf } = req.query; // Retrieve gnaf as a query parameter

    if (!gnaf) {
        return res.status(400).json({ error: "gnaf is required" });
    }

    // Find geofactor corresponding to the given gnaf
    const geofactor = mockGeofactors.find(g => g.gnaf_pid === gnaf);

    if (!geofactor) {
        return res.status(404).json({ data: null }); // Return null if not found
    }

    return res.json({ data: geofactor }); // Return geofactor data
});

export default router;
