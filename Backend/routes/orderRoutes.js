import express from "express";
import { createOrder, getOrders } from "../controllers/orderController.js";
import { auth } from "../middleware/authMiddleware.js";

const router = express.Router();

// User must be logged in to create order
router.post("/", auth, createOrder);

// User must be logged in to fetch orders
router.get("/", auth, getOrders);

export default router;
