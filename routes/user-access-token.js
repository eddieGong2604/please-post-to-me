import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();
const secretKey = 'your_secret_key'; // Replace with your actual secret key

router.post('/', (req, res) => {
    const { refreshToken } = req.body;

    // Validate the refreshToken (In real application, check against the database or other storage)
    if (!refreshToken) {
        return res.status(400).json({ error: 'Refresh token is required' });
    }

    // Here we are assuming the refreshToken is valid. In a real scenario, validate it properly.
    const jwtToken = jwt.sign({ user: 'sampleUser' }, secretKey, { expiresIn: '1h' });

    res.json({ jwt: jwtToken, refreshToken });
});



export default router;
