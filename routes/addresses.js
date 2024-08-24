import express from 'express';
import mockAddresses from '../data/mockAddresses.js';

const router = express.Router();

router.post('/au/address/similar-addresses', (req, res) => {
    const { payload } = req.body;
    const { fullAddress } = payload;

    // Filter the mock addresses based on the provided fullAddress
    const filteredAddresses = mockAddresses.filter(address =>
        address.fullAddress.toLowerCase().includes(fullAddress.toLowerCase())
    );

    // Limit the results based on the option provided (e.g., top 20)
    const { option } = req.body;
    const top = option?.top || filteredAddresses.length;
    const limitedAddresses = filteredAddresses.slice(0, top);

    res.json({ payload: limitedAddresses });
});

export default router;
