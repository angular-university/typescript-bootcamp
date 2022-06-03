
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


if ( isCourse(course) ) {
    console.log(`value is a course: ${JSON.stringify(course, null, 4)}`);
}
else {
    console.log(`value is not a course.`);
}

function isCourse(value: unknown): value is Course {

    const course = value as Course;

    return course.title != null && course.subtitle  != null && course.lessonsCount != null;

}

