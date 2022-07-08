
interface Course {
    title:string;
    subtitle:string;
    lessonsCount: number;
}

export function freezeCourse(course:Course): Readonly<Course> {
    return Object.freeze(course);
}

function freezeLesson(lesson:Lesson): Readonly<Lesson> {
    return Object.freeze(lesson);
}

function freeze<T extends object>(input: T): Readonly<T> {
    return Object.freeze(input);
}

const course: Course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language, build practical projects",
    lessonsCount: 100
}

const frozenCourse = freeze(course);

// const frozenNumber = freeze("10");

//frozenCourse.title = "";

interface Lesson {
    title:string;
    seqNo:number;
}

const frozenLesson = freeze({
    title: "Lesson Title",
    seqNo: 10
})
