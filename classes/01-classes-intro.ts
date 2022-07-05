
class Course {

    private static TOTAL_COURSES = 0;

    static readonly TYPESCRIPT_TITLE = "Typescript Bootcamp";

    constructor(
        private _title:string,
        private price:number,
        private subtitle = "",
        private creationDt = new Date(2000,1,1)
    ) {

        this.validate();

        Course.TOTAL_COURSES++;

    }

    validate() {
        console.log(`Called Course validate()`);
        if (this.price <=0) {
            throw "Price must be larger than zero";
        }
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

class FreeCourse extends Course {

    constructor( title:string,
                 subtitle = "",
                 creationDt = new Date(2000,1,1)) {

        super(title, 0, subtitle, creationDt);

    }

    validate() {
        console.log(`Called FreeCourse validate()`);

    }

}

const typescript = new Course(Course.TYPESCRIPT_TITLE, 100);

console.log(typescript.title);

const angular = new FreeCourse("Angular For Beginners");

console.log(angular);







