import { Router } from "express";
import { getOrders, getProducts } from "../controllers/dataController.js";

const router = Router();

router.get("/orders", getOrders);
router.get("/products", getProducts);

export default router;
