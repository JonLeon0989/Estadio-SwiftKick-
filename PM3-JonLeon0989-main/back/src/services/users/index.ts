import { getRepository } from "typeorm";
import { Users } from "../../entities/User"; 
import { Credentials } from "../../entities/credential";
import { createCredentials } from "../credentials/indes";

export async function getUsers(): Promise<Users[]> {
    const usersRepository = getRepository(Users);
    return await usersRepository.find();
}

export async function getUserById(id: number): Promise<any | undefined> {
    const usersRepository = getRepository(Users);
    const user = await usersRepository.findOne({ where: { id: id }, relations: ["appointments"] });
    if (!user) {
        return undefined;
    }
    const userData = {
        id: user.id,
        name: user.name,
        email: user.email,
        birthdate: user.birthdate,
        nDni: user.dni_number,
        appointments: user.appointments.map(appointment => ({
            id: appointment.id,
            date: appointment.date,
            time: appointment.time,
            description: appointment.description,
            status: appointment.status
        }))
    };
    return userData;
}

export async function createUser(name: string, email: string, birthdate: Date, dni_number: number, username: string, password: string): Promise<void> {
    const credentialsId = await createCredentials(username, password);
    const usersRepository = getRepository(Users);
    const credentialsRepository = getRepository(Credentials);

    // Buscamos las credenciales recién creadas
    const newCredentials = await credentialsRepository.findOne({ where: { id: credentialsId } });

    if (!newCredentials) {
        throw new Error("Error al crear el usuario: no se encontraron las credenciales recién creadas.");
    }

    // Creamos un nuevo usuario
    const newUser = new Users();
    newUser.name = name;
    newUser.email = email;
    newUser.birthdate = birthdate;
    newUser.dni_number = dni_number;

    // Asignamos las credenciales al usuario
    newUser.credentials = newCredentials;

    // Guardamos el nuevo usuario en la base de datos
    await usersRepository.save(newUser);
}