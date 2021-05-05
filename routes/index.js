import express from "express";
import membersRouter from "./membersRouter.js";
import usersRouter from './usersRouter.js';
import premisesRouter from './premisesRouter.js';
import billingRouter from "./billingRouter.js";
import paymentsRouter from "./paymentsRouter.js";
import routesRouter from "./routesRouter.js";

const router = express.Router();


router.use("/members", membersRouter);
router.use("/users", usersRouter);
router.use("/premises", premisesRouter);
router.use("/billing", billingRouter);
router.use("/payments", paymentsRouter);
router.use("/routes", routesRouter);

export default router;