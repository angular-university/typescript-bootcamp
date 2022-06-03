
interface Course {
    readonly title:string,
    subtitle:string,
    lessonsCount?:number
}

const course: unknown = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build practical projects",
    lessonsCount: 10
};

if (isCourse(course)) {

}

function isCourse(value: unknown): value is Course {

    const course = value as Course;

    return course?.title != null && course?.subtitle != null;
}





