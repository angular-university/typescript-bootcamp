
class Course {

    private static TOTAL_COURSES = 0;

    static readonly TYPESCRIPT_TITLE = "Typescript Bootcamp";

    constructor(
        private _title:string,
        private subtitle = "",
        private creationDt = new Date(2000,1,1)
    ) {

        Course.TOTAL_COURSES++;

    }

    static printTitle(course: Course) {
        console.log(`The title of the course ${course.title}`)
    }

    get title() {
        return this._title;
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


const typescript = new Course(Course.TYPESCRIPT_TITLE);

console.log(typescript.title);

const angular = new Course("Angular For Beginners");

Course.printTitle(typescript);







