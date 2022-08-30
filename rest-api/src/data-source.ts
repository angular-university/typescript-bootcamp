import { DataSource } from "typeorm";
import {Course} from "./model/course";
import {Lesson} from "./model/lesson";
import {User} from "./model/user";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: "eosmrdxxecktcq",
    password: "5d9325cf2df9d60ea07db967e31def88e317ceb1fddb9ad84f74b77b84e1e79f",
    database: "d2pfrcmk1hbusn",
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

