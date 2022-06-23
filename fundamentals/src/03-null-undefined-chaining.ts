
let course = {
    textFields: {
        title: "Typescript Bootcamp"
    }
};

const title = course?.textFields?.title ?? "No title found";

logCourseTitle(course);


function logCourseTitle(course) {

    if (!course?.textFields) {
        console.log("textFields not defined.");
        return;
    }

    if (course.textFields.title) {
        console.log(`The title is ${course.textFields.title}`);
    }
}

