import { Router } from "express";
import { getAllAppointments, getAppointmentsById, scheduleAppointments, cancelAppointments } from "../../controllers/appointments";
const routerAppoint : Router  = Router()

routerAppoint.get("/", getAllAppointments);

routerAppoint.get("/:id", getAppointmentsById);

routerAppoint.post("/schedule", scheduleAppointments);

routerAppoint.put("/cancel", cancelAppointments)


export default routerAppoint