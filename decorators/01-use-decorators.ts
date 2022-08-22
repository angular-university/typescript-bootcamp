
import {Log, LoggingLevel, Perf} from "./02-method-decorator";

class DbService {

    @Log(LoggingLevel.INFO)
    @Perf()
    saveData(data:any) {

        console.log(`saving data in the database...`);

    }

}

const db = new DbService();

db.saveData({hello: "World"});


class Course {

    // @DatabaseId()
    id:string;

    title:string;

    constructor(title:string) {
        this.title = title;
    }

    print(message:string) {
        console.log(`${message}, Course ${this.title}, id ${this.id}`);
    }

}




