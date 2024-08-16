import jwt from "jsonwebtoken";
import mockUsers from "../data/mockUsers.js";

/**
 * Check the access token
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const authWeb = async function authWeb(req, res, next) {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({
        message: "Invalid Token",
      });
    }
    const parts = req.headers.authorization.split(" ");
    if (parts.length != 2 || !/^Bearer$/i.test(parts[0])) {
      return res.status(401).json({
        message: "Invalid Token",
      });
    }
    const decoded = await verifyJwtToken(parts[1], process.env.JWT_SECRET);
    if (decoded.exp) {
      const customer = await findUserByName(decoded.username);
      if (customer) {
        return next();
      }
      return res.status(401).json({
        message: "Invalid Token",
      });
    }
    return res.status(401).json({
      message: "Invalid Token",
    });
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      message: "Invalid Token",
    });
  }
};

const verifyRefreshToken = async function verifyRefreshToken(token) {
  try {
    const decoded = await verifyJwtToken(
      token,
      process.env.REFRESH_TOKEN_SECRET
    );
    if (decoded.exp) {
      const customer = await findUserByName(decoded.username);
      if (customer) {
        return customer;
      }
      return false;
    }
    return false;
  } catch (err) {
    return false;
  }
};

const verifyJwtToken = function verifyJwtToken(token, secretKey) {
  return jwt.verify(token, secretKey, (err, decoded) => {
    if (err) return err;

    return decoded;
  });
};

const findUserByName = (name) =>
  mockUsers.find((c) => c.username.trim() === name.trim());

export default { authWeb, verifyRefreshToken };
