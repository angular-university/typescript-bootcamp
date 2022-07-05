
export interface HasId {
    id:string;
    printId();
}

export interface HasTitle extends HasId {
    title:string;
}
