
export interface Course {
    title:string;
    subtitle:string;
    lessonsCount: number;
}

export function updateCourse(
    courseId:string, update: Partial<Course>) {

}

updateCourse("1", {
    title: "New version of title"
});

updateCourse("1", {
    subtitle: "New version of subtitle"
});

updateCourse("1", {
    title: "New version of title",
    lessonsCount: 100
});

