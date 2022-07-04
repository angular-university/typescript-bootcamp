
class Course {

    constructor(
        private _title:string,
        private subtitle = "",
        private creationDt = new Date(2000,1,1)
    ) {

    }

    get title() {
        return this._title;
    }

    set title(newTitle:string) {
        if (!newTitle) {
            throw "Title cannot be empty";
        }

        this._title = newTitle;
    }

    get age() {
        const ageInMs = new Date().getTime() - this.creationDt.getTime();

        return Math.round(ageInMs / 1000 / 60 / 24);
    }

}

const typescript = new Course("Typescript Bootcamp");

console.log(typescript.title);

const angular = new Course("Angular For Beginners");

console.log(angular.title);





