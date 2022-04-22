
function saveCourse(course, callback: Function) {

    setTimeout(() => {

        callback("success");

    }, 1000);

}

const cb = () => console.log("Save successful.");

saveCourse({title:"Typescript Bootcamp"}, cb);
