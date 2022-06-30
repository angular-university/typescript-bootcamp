
class Course {

    constructor(
        private title:string,
        private subtitle:string,
        private creationDt: Date
    ) {

    }

    age() {
        const ageInMs = new Date().getTime() - this.creationDt.getTime();

        return Math.round(ageInMs / 1000 / 60 / 24);
    }

}

const course = new Course(
    "Typescript Bootcamp",
    "Learn the language fundamentals, build practical projects",
    new Date(2000,1,1));

console.log(course.age());





