
interface Course {
    readonly title:string;
    subtitle:string;
}

const course: Course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build practical projects",
    lessonsCount: 10
};

interface Course {
    lessonsCount?:number;
}

const otherCourse: Course = {
    title: "Typescript Bootcamp v2",
    subtitle: "Learn the language fundamentals, build practical projects",
    lessonsCount: 10
};

