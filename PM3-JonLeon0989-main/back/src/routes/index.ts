import { Router } from "express";
import routerUsers from "./users";
import routerAppoint from "./appointments"; 
const router : Router = Router()


router.use("/users", routerUsers)
router.use("/appointments", routerAppoint)

export default router