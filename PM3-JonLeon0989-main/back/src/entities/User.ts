import { Column, Entity, OneToOne, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Credentials } from "./credential";
import { Appointments } from "./appointment";

@Entity({ name: "users" })
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 200 })
    name: string;

    @Column({ unique: true, type: "varchar", length: 200 })
    email: string;

    @Column({ type: "date" })
    birthdate: Date;

    @Column({ unique: true, type: "int" })
    dni_number: number;

    @OneToOne(() => Credentials) // Esto define la relación OneToOne con la entidad Credentials
    @JoinColumn()
    credentials: Credentials;

    @OneToMany(() => Appointments, appointments => appointments.user)
    appointments: Appointments[];
}