
// primitive types: number
const lessonsCount = 10;

const total = lessonsCount + 10;

console.log("total =", total);

// primitive types: string
let title = "Typescript Bootcamp";

let subtitle = "Learn the language fundamentals, build practical projects";

let fullTitle = `Full title:${title}: ${subtitle}`;

console.log(`Full title: ${fullTitle}`);

// primitive types: boolean
const published = true;

if (published) {
    console.log("The course is published.");
}

printCourse(title, subtitle, lessonsCount);

function printCourse(title:string, subtitle:string, lessonsCount:number) {

    let fullTitle = title + subtitle;


}














