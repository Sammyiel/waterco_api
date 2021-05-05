import express from "express";
import { capture_reading, viewBill, viewAllBillings } from "../controllers/billingController.js"

const billingRouter = express.Router();

//Capture Reading
billingRouter.post("/", capture_reading);

// View all the billings
billingRouter.get("/", viewAllBillings)

//View bill
billingRouter.get("/:id", viewBill);

export default billingRouter;