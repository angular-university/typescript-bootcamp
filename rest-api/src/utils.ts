const crypto = require('crypto');
const util = require('util');

const hashPassword = util.promisify(crypto.pbkdf2);

/**
 *
 * checks if a string is a positive integer.
 */
export function isInteger(input:string) {
    return input?.match(/^\d+$/);
}


export async function calculatePasswordHash(plainTextPassword:string, passwordSalt:string) {
    const passwordHash = await hashPassword(
        plainTextPassword,
        passwordSalt,
        1000,
        64,
        `sha512`);

    return passwordHash.toString(`hex`);
}
