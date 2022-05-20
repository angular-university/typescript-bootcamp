
interface Course {
    title:string;
    subtitle: string;
}

function createCourse(title:string, subtitle:string) {

    console.log(` Creating course with Title: ${title}, Subtitle: ${subtitle} `);

    const course = {
        title,
        subtitle
    } as Course;

    return course;
}


