import {Column, CreateDateColumn, Entity,
    PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity({
    name: "COURSES"
})
export class Course {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    seqNo:number;

    @Column()
    title:string;

    @Column()
    iconUrl:string;

    @Column()
    longDescription:string;

    @Column()
    category: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    lastUpdatedAt: Date;
}
