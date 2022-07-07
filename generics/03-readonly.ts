
interface Course {
    title:string;
    subtitle:string;
    lessonsCount: number;
}

function freezeCourse(course:Course): Readonly<Course> {
    return Object.freeze(course);
}

const frozen = freezeCourse({
    title: "Typescript Bootcamp",
    subtitle: "Learn the language, build practical projects",
    lessonsCount: 100
});

//frozen.title = "";
