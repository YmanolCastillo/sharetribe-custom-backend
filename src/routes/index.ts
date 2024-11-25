import { Router } from "express";
import listingRoutes from "./listingRoutes";
import userRoutes from "./userRoutes";
import transactionRoutes from "./transactionRoutes";

const router = Router();

router.use("/listings", listingRoutes);
router.use("/users", userRoutes);
router.use("/transactions", transactionRoutes);

export default router;
