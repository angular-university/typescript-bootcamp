
class Course {
    title:string;
    subtitle:string;
    creationDt: Date;

    constructor(
        title:string,
        subtitle:string,
        creationDt: Date
    ) {
        this.title = title;
        this.subtitle = subtitle;
        this.creationDt = creationDt;
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





