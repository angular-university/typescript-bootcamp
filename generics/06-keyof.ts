
const course: Course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language, build practical projects",
    lessonsCount: 100
}

type CourseKeys = keyof Course;

export function extractProperty<T, K extends keyof T>(data: T, property:K) {
    return data[property];
}

const val = extractProperty(course, "lessonsCount");
