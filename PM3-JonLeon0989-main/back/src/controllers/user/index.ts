import { Request, Response } from "express";
import { validateCredentials } from "../../services/credentials/indes"; 
import { getUsers, getUserById, createUser } from "../../services/users";
import { validateCredentialsAndGetUser } from "./Validations";

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const allUsers =  await getUsers();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getUsersById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user =  await getUserById(parseInt(id));
        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const registerUsers = async (req: Request, res: Response) => {
    try {
        const { name, email, birthdate, dni_number, username, password } = req.body;
        createUser(name, email, new Date(birthdate), dni_number, username, password);
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const loginUsers = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        // Verificar que se proporcionen tanto el nombre de usuario como la contraseña
        if (!username || !password) {
            res.status(400).json({ error: "Username and password are required" });
            return;
        }

        const userData = await validateCredentialsAndGetUser(username, password);
        if (userData !== null) {
            // Las credenciales son válidas, el usuario está autenticado
            res.status(200).json({ message: "User logged in successfully", user: userData });
        } else {
            // Las credenciales son incorrectas
            res.status(400).json({ error: "Invalid username or password" });
        }
    } catch (error) {
        res.status(400).json({ error: "incorrect data" });
    }
};


export { getAllUsers, getUsersById, registerUsers, loginUsers };