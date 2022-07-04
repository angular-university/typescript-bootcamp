
class Course {

    constructor(
        private _title:string,
        private subtitle:string,
        private creationDt: Date
    ) {

    }

    set title(newTitle:string) {
        if (!newTitle) {
            throw "Title cannot be empty";
        }

        this._title = newTitle;
    }

    get age() {
        const ageInMs = new Date().getTime() - this.creationDt.getTime();

        return Math.round(ageInMs / 1000 / 60 / 24);
    }

}

const course = new Course(
    "Typescript Bootcamp",
    "Learn the language fundamentals, build practical projects",
    new Date(2000,1,1));

course.title = "New Value";

console.log(course);





