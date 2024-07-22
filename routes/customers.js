import express from 'express';
import mockCustomers from '../data/mockCustomers.js';
import mockCustomerOnlineActivities from "../data/mockCustomerOnlineActivities.js";
import mockCustomerInvitations from "../data/mockCustomerInvitations.js";
import mockCustomerFnols from "../data/mockCustomerFnols.js";
import mockCustomerComplaints from "../data/mockCustomerComplaints.js";
import mockCustomerComms from "../data/mockCustomerComms.js";
import mockCustomerPolicies from "../data/mockCustomerPolicies.js";
import mockCustomerRelations from "../data/mockCustomerRelations.js";

const router = express.Router();
const findCustomerById = (id) => mockCustomers.find(c => c.id === parseInt(id));

router.get('/', (req, res) => {
    res.json({ customers: mockCustomers });
});

router.get('/:id', (req, res) => {
    const customer = findCustomerById(req.params.id);
    if (customer) {
        res.json({ customer });
    } else {
        res.status(404).json({ error: 'Customer not found' });
    }
});
router.get('/:id/relations', (req, res) => {
    const customer = findCustomerById(req.params.id);
    if (customer) {
        res.json({ relations: mockCustomerRelations });
    } else {
        res.status(404).json({ error: 'Customer not found' });
    }
});

router.get('/:id/addresses', (req, res) => {
    const customer = findCustomerById(req.params.id);
    if (customer) {
        res.json({ addresses: customer.addresses });
    } else {
        res.status(404).json({ error: 'Customer not found' });
    }
});

router.get('/:id/vehicles', (req, res) => {
    const customer = findCustomerById(req.params.id);
    if (customer) {
        res.json({ vehicles: customer.vehicles });
    } else {
        res.status(404).json({ error: 'Customer not found' });
    }
});

router.get('/:id/complaints', (req, res) => {
    const customer = findCustomerById(req.params.id);
    if (customer) {
        res.json({ complaints: mockCustomerComplaints });
    } else {
        res.status(404).json({ error: 'Customer not found' });
    }
});


router.get('/:id/comms', (req, res) => {
    const customer = findCustomerById(req.params.id);
    if (customer) {
        res.json({ comms: mockCustomerComms });
    } else {
        res.status(404).json({ error: 'Customer not found' });
    }
});

router.get('/:id/policies', (req, res) => {
    const customer = findCustomerById(req.params.id);
    if (customer) {
        res.json({ policies: mockCustomerPolicies });
    } else {
        res.status(404).json({ error: 'Customer not found' });
    }
});

router.get('/:id/sj-fnols', (req, res) => {
    const customer = findCustomerById(req.params.id);
    if (customer) {
        res.json({ fnols: mockCustomerFnols });
    } else {
        res.status(404).json({ error: 'Customer not found' });
    }
});

router.get('/:id/invitations', (req, res) => {
    const customer = findCustomerById(req.params.id);
    if (customer) {
        res.json({ invitations: mockCustomerInvitations });
    } else {
        res.status(404).json({ error: 'Customer not found' });
    }
});

router.get('/:id/online-activities', (req, res) => {
    const customer = findCustomerById(req.params.id);
    if (customer) {
        res.json({ activities: mockCustomerOnlineActivities });
    } else {
        res.status(404).json({ error: 'Customer not found' });
    }
});

export default router;
