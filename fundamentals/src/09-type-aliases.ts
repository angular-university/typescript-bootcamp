
type CourseStatus = "draft" | "published" | "unpublished" |
    "archived";

let courseStatus:CourseStatus  = "draft";

let newStatus:CourseStatus = "published";

type Course = {
    readonly title:string,
    subtitle:string,
    lessonsCount?:number
};

let course: Course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build practical projects",
    lessonsCount: 10
};





