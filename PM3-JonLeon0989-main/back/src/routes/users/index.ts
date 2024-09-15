import { Router } from "express";
import { getAllUsers, getUsersById, registerUsers, loginUsers } from "../../controllers/user";
import { checkRequiredFields } from "../../middlewares";
const routerUsers : Router  = Router()

routerUsers.get("/", getAllUsers);

routerUsers.get("/:id", getUsersById);

routerUsers.post("/register", registerUsers);

routerUsers.post("/login", loginUsers);

export default routerUsers