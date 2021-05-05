import express from "express";
import { capture_payments, ViewAllPayments, ViewPremisePayment } from "../controllers/paymentsController.js"

const paymentsRouter = express.Router();

//Capture payments
paymentsRouter.post("/", capture_payments);

//View all payments
paymentsRouter.get("/", ViewAllPayments);

//View Payments by Premise
paymentsRouter.get("/premise_id/:id", ViewPremisePayment);

export default paymentsRouter;