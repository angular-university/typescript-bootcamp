
interface Course {
    title:string;
    lessonsCount:number;
}

const course1:Course = {
    title: "Typescript Bootcamp",
    lessonsCount: 100
};

const course2: Course = {
  title: "Angular For Beginners",
  lessonsCount: 20
};

function printCourses(message:string, ...courses: Course[]) {

    console.log(message);

    for (let course of courses) {
        console.log(course.title);
    }

}

// printCourses("Welcome to the Angular University", [course1, course2]);

printCourses("Welcome to the Angular University", course1, course2);







