
const someData = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language, build practical projects",
    lessonsCount: 100
}

const moreData = {
    seqNo: 10,
    price: 100
}

export function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}

const merged = merge(someData, moreData);


