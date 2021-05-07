import express from "express";
import { addUser, viewAllUsers, viewUser, signIn, updateUser, deleteUser, viewUserEmail } from '../controllers/usersController.js'
import { authenticate } from '../middlewares/auth.js';

const usersRouter = express.Router();

//Add a User - Sign Up - Authenticate.
usersRouter.post("/", authenticate, addUser);

//Add a User - Sign In - No need of Authentication
usersRouter.post("/signin", signIn);

//View a User users/:id - Authenticate.
usersRouter.get("/:id", authenticate, viewUser);

usersRouter.get("/email/:email_address", authenticate, viewUserEmail);

//View all Users users/ - Authenticate.
usersRouter.get("/", authenticate, viewAllUsers);

// added the following routes

// Edit/update a User
usersRouter.put("/", authenticate, updateUser);

// close/delete a User
usersRouter.delete("/:id", authenticate, deleteUser);


export default usersRouter;