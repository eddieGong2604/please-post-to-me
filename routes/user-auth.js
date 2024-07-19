import express from 'express';
import jwt from "jsonwebtoken";
import mockUsers from "../data/mockUsers.js";

const router = express.Router();

const jwtSecret = 'your_jwt_secret';
const refreshTokenSecret = 'your_refresh_token_secret';
const jwtExpiry = '1h';  // JWT expiry time
const refreshTokenExpiry = '7d';  // Refresh token expiry time

router.post('/', (req, res) => {
    const { username, password } = req.body;

    const user = mockUsers.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Authentication failed' });
    }

    const token = jwt.sign({ username }, jwtSecret, { expiresIn: jwtExpiry });
    const refreshToken = jwt.sign({ username }, refreshTokenSecret, { expiresIn: refreshTokenExpiry });

    res.json({ jwt: token, refreshToken: refreshToken });
});

export default router;
