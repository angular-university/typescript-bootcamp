/**
 *
 * checks if a string is a positive integer.
 */
export function isInteger(input:string) {
    return input?.match(/^\d+$/);
}
