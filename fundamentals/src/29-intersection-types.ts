
interface HasId {
    id:string;
}
interface HasTitle {
    title:string;
    description:string;
}

type Course = HasId & HasTitle;

