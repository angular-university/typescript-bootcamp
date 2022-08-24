
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    VersionColumn
} from "typeorm"

@Entity({
    name: "COURSES"
})
export class Course {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    url:string;

    @Column()
    seqNo:number;

    @Column()
    title:string;

    @Column()
    iconUrl: string;

    @Column()
    courseListIcon: string;

    @Column()
    longDescription: string;

    @Column()
    category:string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    lastUpdateAt: Date;

    @DeleteDateColumn()
    deleteAt: Date;

    @VersionColumn()
    version: number;

}
