import express from "express";
import mockCustomers from "../data/mockCustomers.js";
import middleware from "../middleware/index.js";

const router = express.Router();
const findCustomerById = (id) =>
  mockCustomers.find((c) => c.id === parseInt(id));

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
    res.json({ relations: customer.relations });
  } else {
    res.status(404).json({ error: "Customer not found" });
  }
});

router.get("/:id/addresses", middleware.authWeb, (req, res) => {
  // Mock data: return 2 individual and 2 business customers
  const customer = findCustomerById(req.params.id);
  if (customer) {
    res.json({ addresses: customer.addresses });
  } else {
    res.status(404).json({ error: "Customer not found" });
  }
});

router.get("/:id/vehicles", middleware.authWeb, (req, res) => {
  // Mock data: return 2 individual and 2 business customers
  const customer = findCustomerById(req.params.id);
  if (customer) {
    res.json({ vehicles: customer.vehicles });
  } else {
    res.status(404).json({ error: "Customer not found" });
  }
});

router.get("/:id/complaints", middleware.authWeb, (req, res) => {
  // Mock data: return 2 individual and 2 business customers
  const customer = findCustomerById(req.params.id);
  if (customer) {
    res.json({ complaints: customer.complaints });
  } else {
    res.status(404).json({ error: "Customer not found" });
  }
});

router.get("/:id/comms", middleware.authWeb, (req, res) => {
  // Mock data: return 2 individual and 2 business customers
  const customer = findCustomerById(req.params.id);
  if (customer) {
    res.json({ comms: customer.comms });
  } else {
    res.status(404).json({ error: "Customer not found" });
  }
});

router.get("/:id/policies", middleware.authWeb, (req, res) => {
  // Mock data: return 2 individual and 2 business customers
  const customer = findCustomerById(req.params.id);
  if (customer) {
    res.json({ policies: customer.policies });
  } else {
    res.status(404).json({ error: "Customer not found" });
  }
});

router.get("/:id/sj-fnols", middleware.authWeb, (req, res) => {
  // Mock data: return 2 individual and 2 business customers
  const customer = findCustomerById(req.params.id);
  if (customer) {
    res.json({ fnols: customer.fnols });
  } else {
    res.status(404).json({ error: "Customer not found" });
  }
});

router.get("/:id/invitations", middleware.authWeb, (req, res) => {
  // Mock data: return 2 individual and 2 business customers
  const customer = findCustomerById(req.params.id);
  if (customer) {
    res.json({ invitations: customer.invitations });
  } else {
    res.status(404).json({ error: "Customer not found" });
  }
});

export default router;
