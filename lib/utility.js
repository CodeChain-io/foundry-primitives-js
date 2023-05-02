"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toLocaleString = exports.getAccountIdFromPublic = exports.getAccountIdFromPrivate = exports.toArray = exports.toHex = void 0;
const hash_1 = require("./hash");
const key_1 = require("./key/key");
/**
 * @hidden
 */
const toHexByte = (byte) => byte < 0x10 ? `0${byte.toString(16)}` : byte.toString(16);
/**
 * Converts buffer to hexadecimal string.
 * @param buffer arbritrary length of data
 * @returns hexadecimal string
 */
const toHex = (buffer) => {
    return Array.from(buffer)
        .map(toHexByte)
        .join("");
};
exports.toHex = toHex;
/**
 * Converts hexadecimal string to Uint8Array.
 * @param string arbritrary length of data
 * @returns Uint8Array
 */
const toArray = (hex) => {
    return Uint8Array.from(Buffer.from(hex, "hex"));
};
exports.toArray = toArray;
/**
 * Gets account id from private key.
 * @param priv 32 byte hexadecimal string of private key
 * @returns 20 byte hexadecimal string of account id
 */
const getAccountIdFromPrivate = (priv) => {
    const publicKey = (0, key_1.getPublicFromPrivate)(priv);
    return (0, exports.getAccountIdFromPublic)(publicKey);
};
exports.getAccountIdFromPrivate = getAccountIdFromPrivate;
/**
 * Gets account id from the given public key.
 * @param publicKey 64 byte hexadecimal string of uncompressed public key
 * @returns 20 byte hexadecimal string of account id
 */
const getAccountIdFromPublic = (publicKey) => {
    return (0, hash_1.blake160)(publicKey);
};
exports.getAccountIdFromPublic = getAccountIdFromPublic;
/**
 * Converts BigNumber to formatted number string
 * Default decimalSeparator is point: "."
 * Default groupSeparator is comma; ","
 * Default groupSize is 3
 * @param num BigNumber object
 * @returns formatted number string
 */
const toLocaleString = (num) => {
    return num.toFormat();
};
exports.toLocaleString = toLocaleString;
//# sourceMappingURL=utility.js.map