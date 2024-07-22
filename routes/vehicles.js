import express from 'express';
import mockVehicleDetails from "../data/mockVehicleDetails.js";
import mockCustomers from "../data/mockCustomers.js";

const router = express.Router();

router.post('/:id/details', (req, res) => {
    res.json({ vehicle: mockVehicleDetails });
});

router.post('/:id/customers', (req, res) => {
    res.json({ customers: mockCustomers });
});

export default router;
