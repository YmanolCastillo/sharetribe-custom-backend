import { Router } from "express";
import { getListings } from "../controllers/listingController";

const router = Router();

router.get("/", getListings);

export default router;
