
interface Course {
    title:string;
    subtitle: string;
    lessonsCount:number;
}

function createCourse(title:string, subtitle:string, lessonsCount:number) {

    console.log(` Creating course with Title: ${title}, Subtitle: ${subtitle} lessons count: ${lessonsCount}`);

    const course = {
        title,
        subtitle,
        lessonsCount
    } as Course;


    return course;
}

