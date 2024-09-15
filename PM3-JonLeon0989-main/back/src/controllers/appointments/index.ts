import { Request, Response } from "express";
import { getAppointments, getAppointmentById, createAppointment, cancelAppointmentById } from "../../services/appointments";

const getAllAppointments = async (req: Request, res: Response) => {
    try {
        const allAppointments = await getAppointments();
        res.status(200).json(allAppointments);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getAppointmentsById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const appointment =  await getAppointmentById(parseInt(id));
        if (!appointment) {
            res.status(404).json({ error: "Appointment not found" });
            return;
        }
        res.status(200).json(appointment);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
const scheduleAppointments = async (req: Request, res: Response) => {
    try {
        const { date, time, description, userId } = req.body; // Asegúrate de que userId se reciba correctamente del cuerpo de la solicitud

        // Crear el nuevo turno asociado al usuario correspondiente
        const newAppointment = await createAppointment(userId, new Date(date), time, description);

        if (newAppointment) {
            // Si el turno se crea correctamente, enviar una respuesta de éxito
            res.status(201).json({ message: "Appointment scheduled successfully" });
        } else {
            // Si el usuario no existe o hubo un problema al crear el turno, enviar un mensaje de error
            res.status(404).json({ error: "User not found or error creating appointment" });
        }
    } catch (error) {
        // Si ocurre algún error interno, enviar un mensaje de error al cliente
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const cancelAppointments = async (req: Request, res: Response) => {
    try {
        const { id } = req.body;
        if (!id) {
            res.status(400).json({ error: "Appointment ID not provided in request body" });
            return;
        }
        const canceled = cancelAppointmentById(id);
        if (!canceled) {
            res.status(404).json({ error: "Appointment not found" });
            return;
        }
        res.status(200).json({ message: "Appointment canceled successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};


export { getAllAppointments, getAppointmentsById, scheduleAppointments, cancelAppointments };