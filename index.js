import express from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import customersRoutes from "./routes/customers.js";
import userAuthRoutes from "./routes/user-auth.js";
import userAccessTokenRoutes from "./routes/user-access-token.js";

const app = express();

app.use(bodyParser.json());
app.use("/customers", customersRoutes);
app.use("/users-auth", userAuthRoutes);
app.use("/users-access-token", userAccessTokenRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
