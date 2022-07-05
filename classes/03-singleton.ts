
export class CoursesService {

    private static INSTANCE: CoursesService;

    private constructor() {
        console.log(`The CoursesService was initialized.`);
    }

    static instance() {
        if (!CoursesService.INSTANCE) {
            CoursesService.INSTANCE = new CoursesService();
        }
        return CoursesService.INSTANCE;
    }

}

