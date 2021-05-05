import express from "express";
import { createPremise, viewAllPremises, viewPremise, updatePremise, viewMemberPremises } from '../controllers/premisesController.js'
import { authenticate } from '../middlewares/auth.js';

const premisesRouter = express.Router();

//Add a premise {premises/}
premisesRouter.post("/", createPremise);

//View a premise {premises/:id}
premisesRouter.get("/:id", viewPremise);

//View all premises {premises /}
premisesRouter.get("/", viewAllPremises);

//Update premise record {members/}
premisesRouter.put("/", updatePremise);

//View member premises {premises/member_id/:id}
premisesRouter.get("/member_id/:id", viewMemberPremises);

export default premisesRouter;