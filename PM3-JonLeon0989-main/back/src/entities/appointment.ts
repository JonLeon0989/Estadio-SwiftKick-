import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "../types/appoinrment";
import { Users } from "./User";

@Entity({name: "appointments"})

export class Appointments{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type: "date"})
    date:Date;

    @Column({type: "time"})
    time:string;

    @Column({type: "text"})
    description: string;

    @Column({type: "enum", enum:Status, default: Status.Active })
    status: Status;

   @ManyToOne(()=> Users, users => users.appointments)
   user :Users;  

    
}