import express from "express";
import jwt from "jsonwebtoken";
import mockUsers from "../data/mockUsers.js";
import "dotenv/config";
import middleware from "../middleware/index.js";
const router = express.Router();

router.get("/", middleware.authWeb, (req, res) => {

    const parts = req.headers.authorization.split(" ");
    const decoded = jwt.decode(parts[1], process.env.JWT_SECRET)
    
    const user = mockUsers.find(user => user.username === decoded.username)
    if(!user){
        return res.status(404).json({ message: "User not found" });
    }
  res.json({user: { firstName: user.firstName, 
    lastName: user.lastName }});
});


export default router