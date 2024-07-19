import express from 'express';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
import customersRoutes from './routes/customers.js';
import userAuthRoutes from './routes/user-auth.js';
import userAccessTokenRoutes from './routes/user-access-token.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/customers', customersRoutes);
app.use('/user-auth', userAuthRoutes);
app.use('/user-access-token', userAccessTokenRoutes);



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
