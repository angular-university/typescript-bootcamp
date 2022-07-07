
const numbers = new Array<number>();

numbers.push(10);

const promise = new Promise<string>((resolve, reject) => {

    resolve("Hello World");

});

promise.then(val => {


})
