
class KeyValue<K, V> {

    constructor(
        public readonly key: K,
        public readonly value: V) {
    }

    print() {
        console.log(`key = ${this.key} value = ${this.value}`);
    }
}

const p1 = new KeyValue("1", 10);

const val1 = p1.value;

const p2 = new KeyValue(2, "Hello World");

const val2 = p2.value;

const course: Course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language, build practical projects",
    lessonsCount: 100
}

const p3 = new KeyValue("3", course);

const val3 = p3.value;
