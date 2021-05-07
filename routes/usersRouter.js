import express from "express";
import { addUser, viewAllUsers, viewUser, signIn, updateUser, deleteUser, viewUserEmail } from '../controllers/usersController.js'
import { authenticate } from '../middlewares/auth.js';

const usersRouter = express.Router();

//Add a User - Sign Up - Authenticate.
usersRouter.post("/", addUser);

//Add a User - Sign In - No need of Authentication
usersRouter.post("/signin", signIn);

//View a User users/:id - Authenticate.
usersRouter.get("/:id", viewUser);

usersRouter.get("/email/:email_address", viewUserEmail);

//View all Users users/ - Authenticate.
usersRouter.get("/", viewAllUsers);

// added the following routes

// Edit/update a User
usersRouter.put("/", updateUser);

// close/delete a User
usersRouter.delete("/:id", deleteUser);


export default usersRouter;