

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    VersionColumn, OneToMany
} from "typeorm"
import {Lesson} from "./lesson";

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
    isAdmin: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    lastUpdateAt: Date;
}
