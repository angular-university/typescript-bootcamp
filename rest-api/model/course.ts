
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    VersionColumn
} from "typeorm"

@Entity()
export class Course {

    @PrimaryGeneratedColumn()
    id:number;

    @Column("varchar", {length: 200})
    description:string;

    @Column()
    iconUrl: string;

    @Column()
    courseListIcon: string;

    @Column()
    longDescription: string;

    @Column()
    category:string;

    @CreateDateColumn()
    createDt: Date;

    @UpdateDateColumn()
    lastUpdateDt: Date;

    @DeleteDateColumn()
    deleteDt: Date;

    @VersionColumn()
    version: number;

}
