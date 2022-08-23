
import {Log, LoggingLevel, Perf} from "./02-method-decorator";
import {SealClass} from "./03-class-decorator";

@SealClass
class DbService {

    @Perf()
    @Log(LoggingLevel.INFO)
    saveData(data:any) {

        console.log(`saving data in the database...`);

    }

}

const db = new DbService();

db.saveData({hello: "World"});

/*

Object.defineProperty(DbService, "sayHello",{
    value: () => {
        console.log("Hello World");
    }
})

 */


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




