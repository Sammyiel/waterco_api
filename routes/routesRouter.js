import express from "express";
import { create_route, viewRoutes, updateRoute, viewPremiseRoute } from "../controllers/routesController.js"
const routesRouter = express.Router();


//create routes
routesRouter.post("/", create_route);

//view routes
routesRouter.get("/", viewRoutes);

//edit/update route
routesRouter.put("/:id", updateRoute);

//view premise on route
routesRouter.get("/:id", viewPremiseRoute);

export default routesRouter;