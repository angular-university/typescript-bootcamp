import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";


@Entity({
    name: "USERS"
})
export class User {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    email:string;

    @Column()
    passwordHash:string;

    @Column()
    passwordSalt:string;

    @Column()
    pictureUrl:string;

    @Column()
    isAdmin:boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    lastUpdatedAt: Date;
}
