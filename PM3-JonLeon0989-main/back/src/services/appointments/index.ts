import { getRepository } from "typeorm";
import { Users } from "../../entities/User";
import { Appointments } from "../../entities/appointment";
import { Status } from "../../types/appoinrment"; 


export async function getAppointments(): Promise<Appointments[]> {
    const appointmentsRepository = getRepository(Appointments);
    return await appointmentsRepository.find();
}

// Función para crear un nuevo turno asociado a un usuario
export async function createAppointment(userId: number, date: Date, time: string, description: string): Promise<Appointments | undefined> {
    const userRepository = getRepository(Users);
    const appointmentsRepository = getRepository(Appointments);

    // Buscar el usuario por su ID
    const user: Users | null = await userRepository.findOne({ where: { id: userId } });
    if (user === null) {
        // Si no se encuentra el usuario, retorna undefined
        return undefined;
    }

    // Crear un nuevo turno con los detalles proporcionados
    const newAppointment = new Appointments();
    newAppointment.date = date;
    newAppointment.time = time;
    newAppointment.description = description;
    newAppointment.status = Status.Active;
    newAppointment.user = user; 

    // Guardar el nuevo turno en la base de datos
    const savedAppointment = await appointmentsRepository.save(newAppointment);

    return savedAppointment;
}


export async function getAppointmentById(id: number): Promise<Appointments | undefined> {
    const appointmentsRepository = getRepository(Appointments);
    const appointment = await appointmentsRepository.findOne({ where: { id: id } }) as Appointments;
    if (appointment === null) {
        return undefined;
    }
    return appointment;
}


export async function cancelAppointmentById(id: number): Promise<boolean> {
    const appointmentsRepository = getRepository(Appointments);
    const appointment = await appointmentsRepository.findOne({ where: { id: id } }) as Appointments;
    if (!appointment) {
        return false;
    }
    
    appointment.status = Status.CANCELED; // Assuming "status" is a string property in your entity
    await appointmentsRepository.save(appointment);
    return true;
}