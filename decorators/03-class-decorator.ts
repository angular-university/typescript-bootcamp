

export function SealClass(constructor: Function) {
        Object.seal(constructor);
        Object.seal(constructor.prototype);
}
