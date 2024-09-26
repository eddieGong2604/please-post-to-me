import express from 'express';
import bodyParser from 'body-parser';
import customersRoutes from './routes/customers.js';
import vehiclesRoutes from './routes/vehicles.js';
import userAuthRoutes from './routes/user-auth.js';
import userAccessTokenRoutes from './routes/user-access-token.js';
import customerJourneyInteractionRoutes from './routes/customer-journey-interaction.js';
import userMeRoutes from './routes/user-me.js';
import addressesRoutes from './routes/addresses.js'
import propertiesRoutes from './routes/properties.js'
import geofactorsRoutes from './routes/geofactors.js'

import cors from 'cors';
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use('/customers', customersRoutes);
app.use('/vehicles', vehiclesRoutes);
app.use('/users-auth', userAuthRoutes);
app.use('/users-access-token', userAccessTokenRoutes);
app.use('/customer-journey-interaction', customerJourneyInteractionRoutes);
app.use('/users-me', userMeRoutes );
app.use('/addresses', addressesRoutes);
app.use('/properties', propertiesRoutes);
app.use('/geofactors', geofactorsRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
