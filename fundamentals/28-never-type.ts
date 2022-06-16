
let anyValue:any;

//let neverValue : never = undefined;

//neverValue["property"] = 10;

type CourseStatus = "draft" | "published" | "unpublished";

let courseStatus : CourseStatus;

if (courseStatus == "draft") {

}
else if (courseStatus == "published") {

}
else if (courseStatus == "unpublished") {

}
else {
    unexpectedError(courseStatus);
}

function unexpectedError(value:never) {
    throw new Error(`Unexpected value: ${value}`);
}



