import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "credentials"})

export class Credentials{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, type: "varchar", length:100})
    username:string;

    @Column({type:"text"})
    password:string;
}


