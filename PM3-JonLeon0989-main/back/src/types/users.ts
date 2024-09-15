import { Icredentials } from "./credentials";

export interface Iusers{
    id: number;
    name: string;
    email: string;
    birthdate: Date;
    dni_number: number;
    credentialsId: Icredentials["id"];
}