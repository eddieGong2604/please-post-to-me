// routes/properties.js
import express from 'express';
import mockProperties from '../data/mockProperties.js';

const router = express.Router();

router.get('/', (req, res) => {
    const { property_id } = req.query;

    if (!property_id) {
        return res.status(400).json({ error: "property_id is required" });
    }

    // Find property matching the given property_id
    const property = mockProperties.find(prop => prop.property_id === property_id);

    if (!property) {
        return res.status(404).json({ properties: [] }); // Return empty array if not found
    }

    return res.json({ properties: [property] }); // Return property in an array
});

export default router;
