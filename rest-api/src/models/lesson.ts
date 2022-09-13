import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Course } from "./course";

@Entity({
    name: "LESSONS"
})
export class Lesson {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column()
    duration:string;

    @Column()
    seqNo: number;

    @ManyToOne(() => Course, course => course.lessons)
    course: Course;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    lastUpdatedAt: Date;
}
