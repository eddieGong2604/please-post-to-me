import express from "express";
import jwt from "jsonwebtoken";
import middleware from "../middleware/index.js";

const router = express.Router();
const jwtSecret = process.env.JWT_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
const jwtExpiry = process.env.JWT_EXPIRY;
const refreshTokenExpiry = process.env.REFRESH_TOKEN_EXPIRY;

router.post("/", async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(400).json({ error: "Refresh token is required" });
  }

  const verifyJwtToken = await middleware.verifyRefreshToken(refreshToken);
  if (!verifyJwtToken) {
    return res.status(401).json({
      message: "Invalid Refresh Token",
    });
  }

  // Here we are assuming the refreshToken is valid. In a real scenario, validate it properly.
  const jwtToken = jwt.sign({ username: verifyJwtToken.username }, jwtSecret, {
    expiresIn: jwtExpiry,
  });

  const newRefreshToken = jwt.sign({ username: verifyJwtToken.username }, refreshTokenSecret, {
    expiresIn: refreshTokenExpiry,
  });
  res.json({ jwt: jwtToken, refreshToken: newRefreshToken });
});

router.delete('', (req, res) => {
  // Extract the refreshToken from the query parameters
  const { refreshToken } = req.query;
  // Always respond with 204 No Content
  res.status(204).send();
});

export default router;
