
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

