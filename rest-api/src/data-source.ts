import { DataSource } from "typeorm";
import {Course} from "./model/course";
import {Lesson} from "./model/lesson";
import {User} from "./model/user";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: true,
    extra: {
        // this config is specific to Heroku, it just says to just rely on the password to give access
        // it's just saying to Heroku to allow SSL connections that don't come from a known client with a valid certificate
        ssl: {
            rejectUnauthorized: false
        }
    },
    entities: [
        Course,
        Lesson,
        User
    ],
    logging: true,
    synchronize: false,
});

