import express from "express";
import jwt from "jsonwebtoken";
import mockUsers from "../data/mockUsers.js";

const router = express.Router();

const jwtSecret = process.env.JWT_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
const jwtExpiry = process.env.JWT_EXPIRY;
const refreshTokenExpiry = process.env.REFRESH_TOKEN_EXPIRY;

router.post("/", (req, res) => {
  const { username, password } = req.body;

  const user = mockUsers.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  const token = jwt.sign({ username }, jwtSecret, { expiresIn: jwtExpiry });
  const refreshToken = jwt.sign({ username }, refreshTokenSecret, {
    expiresIn: refreshTokenExpiry,
  });

  res.json({ jwt: token, refreshToken: refreshToken });
});

export default router;
