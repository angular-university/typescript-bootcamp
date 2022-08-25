import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({
    name: "LESSONS"
})
export class Lesson {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    duration: string;

    @Column()
    seqNo: number;

    @Column()
    courseId: number;

}
