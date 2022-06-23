
import {PAGE_SIZE, COURSE} from "./12-modules-exports";

const pageSize = PAGE_SIZE;


import {Course, loadAllCourses, saveCourse}
    from "../14-module-reexports";

import printCourse from "./15-default-exports";

import * as constants from "./15-default-exports";

printCourse({});
