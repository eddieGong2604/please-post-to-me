import express from "express";
import mockCustomers from "../data/mockCustomers.js";
import middleware from "../middleware/index.js";
import mockCustomerOnlineActivities from "../data/mockCustomerOnlineActivities.js";
import mockCustomerInvitations from "../data/mockCustomerInvitations.js";
import mockCustomerFnols from "../data/mockCustomerFnols.js";
import mockCustomerComplaints from "../data/mockCustomerComplaints.js";
import mockCustomerComms from "../data/mockCustomerComms.js";
import mockCustomerPolicies from "../data/mockCustomerPolicies.js";
import mockCustomerRelations from "../data/mockCustomerRelations.js";
import mockVehicles from "../data/mockCustomerVehicles.js";
import mockCustomerAddresses from "../data/mockCustomerAddresses.js";
import mockCustomerAliases from '../data/mockCustomerAliases.js';

const router = express.Router();
const findCustomerById = (id) =>
  mockCustomers.find((c) => c._id === parseInt(id));

router.get("/", middleware.authWeb, (req, res) => {
  res.json({ customers: mockCustomers });
});

// Get a single customer by ID
router.get("/:id", middleware.authWeb, (req, res) => {
  const customer = findCustomerById(req.params.id);
  if (customer) {
    res.json({ customer });
  } else {
    res.status(404).json({ error: "Customer not found" });
  }
});
router.get("/:id/relations", middleware.authWeb, (req, res) => {
  // Mock data: return 2 individual and 2 business customers
  const customer = findCustomerById(req.params.id);
  if (customer) {
    res.json({ relations: mockCustomerRelations });
  } else {
    res.status(404).json({ error: "Customer not found" });
  }
});

router.get("/:id/addresses", middleware.authWeb, (req, res) => {
  // Mock data: return 2 individual and 2 business customers
  const customer = findCustomerById(req.params.id);
  if (customer) {
    if(req.params.id == 2){
      res.json({ addresses: []});
    }
    res.json({ addresses: mockCustomerAddresses});
  } else {
    res.status(404).json({ error: "Customer not found" });
  }
});

router.get("/:id/vehicles", middleware.authWeb, (req, res) => {
  // Mock data: return 2 individual and 2 business customers
  const customer = findCustomerById(req.params.id);
  if (customer) {
    if(req.params.id == 2){
      res.json({ vehicles: []});
    }
    res.json({ vehicles: mockVehicles });
  } else {
    res.status(404).json({ error: "Customer not found" });
  }
});

router.get("/:id/complaints", middleware.authWeb, (req, res) => {
  // Mock data: return 2 individual and 2 business customers
  const customer = findCustomerById(req.params.id);
  if (customer) {
    res.json({ complaints: mockCustomerComplaints });
  } else {
    res.status(404).json({ error: "Customer not found" });
  }
});

router.get("/:id/comms", middleware.authWeb, (req, res) => {
  // Mock data: return 2 individual and 2 business customers
  const customer = findCustomerById(req.params.id);
  if (customer) {
    res.json({ comms: mockCustomerComms });
  } else {
    res.status(404).json({ error: "Customer not found" });
  }
});

// GET /customers/:customerId/policies
router.get('/:customerId/policies', middleware.authWeb, (req, res) => {
    const { customerId } = req.params;
    // Find all policies associated with the provided customerId
    const customerPolicies = mockCustomerAliases
        .filter(alias => alias.mock__field__customerId === parseInt(customerId)) // Filter aliases by customerId
        .flatMap(alias => alias.policies); // Extract policies from each alias

    // Respond with the collected policies
    res.json({ policies: customerPolicies });
});

router.get("/:id/sj-fnols", middleware.authWeb, (req, res) => {
  // Mock data: return 2 individual and 2 business customers
  const customer = findCustomerById(req.params.id);
  if (customer) {
    res.json({ fnols: mockCustomerFnols });
  } else {
    res.status(404).json({ error: "Customer not found" });
  }
});

router.get("/:id/invitations", middleware.authWeb, (req, res) => {
  // Mock data: return 2 individual and 2 business customers
  const customer = findCustomerById(req.params.id);
  if (customer) {
    res.json({ invitations: mockCustomerInvitations });
  } else {
    res.status(404).json({ error: "Customer not found" });
  }
});


router.get('/:id/online-activities', middleware.authWeb, (req, res) => {
    const customer = findCustomerById(req.params.id);
    if (customer) {
        res.json({ activities: mockCustomerOnlineActivities });
    } else {
        res.status(404).json({ error: 'Customer not found' });
    }
});



export default router;
