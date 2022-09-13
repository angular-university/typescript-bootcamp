import {DataSource} from "typeorm";
import {Course} from "./models/course";
import {Lesson} from "./models/lesson";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT),
    database: process.env.DB_NAME,
    ssl: true,
    extra: {
      ssl : {
          rejectUnauthorized:false
      }
    },
    entities: [
        Course,
        Lesson
    ],
    synchronize: true,
    logging:true
})
