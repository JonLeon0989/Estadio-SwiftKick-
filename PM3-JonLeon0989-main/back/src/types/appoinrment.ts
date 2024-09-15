import { Iusers } from "./users";

export enum Status{
    Active = "ACTIVE",
    CANCELED = "CANCELED"
}

export interface Iappointments{
    id: number;
    date: Date;
    time: string;
    userId: Iusers["id"];
    status: Status
}