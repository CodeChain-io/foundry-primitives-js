"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ripemd160 = exports.blake128WithKey = exports.blake128 = exports.blake160WithKey = exports.blake160 = exports.blake256WithKey = exports.blake256 = void 0;
const crypto_js_1 = require("crypto-js");
const utility_1 = require("./utility");
/**
 * @hidden
 */
const blake = require("blakejs");
/**
 * Gets data's 256 bit blake hash.
 * @param data buffer or hexadecimal string
 * @returns 32 byte hexadecimal string
 */
const blake256 = (data) => {
    if (!(data instanceof Buffer)) {
        data = Buffer.from(data, "hex");
    }
    const context = blake.blake2bInit(32, null);
    blake.blake2bUpdate(context, data);
    return (0, utility_1.toHex)(blake.blake2bFinal(context));
};
exports.blake256 = blake256;
/**
 * Gets data's 256 bit blake hash by using the key.
 * @param data buffer or hexadecimal string
 * @param key
 * @returns 32 byte hexadecimal string
 */
const blake256WithKey = (data, key) => {
    if (!(data instanceof Buffer)) {
        data = Buffer.from(data, "hex");
    }
    const context = blake.blake2bInit(32, key);
    blake.blake2bUpdate(context, data);
    return (0, utility_1.toHex)(blake.blake2bFinal(context));
};
exports.blake256WithKey = blake256WithKey;
/**
 * Gets data's 160 bit blake hash.
 * @param data buffer or hexadecimal string
 * @returns 20 byte hexadecimal string
 */
const blake160 = (data) => {
    if (!(data instanceof Buffer)) {
        data = Buffer.from(data, "hex");
    }
    const context = blake.blake2bInit(20, null);
    blake.blake2bUpdate(context, data);
    return (0, utility_1.toHex)(blake.blake2bFinal(context));
};
exports.blake160 = blake160;
/**
 * Gets data's 160 bit blake hash by using the key.
 * @param data buffer or hexadecimal string
 * @param key
 * @returns 20 byte hexadecimal string
 */
const blake160WithKey = (data, key) => {
    if (!(data instanceof Buffer)) {
        data = Buffer.from(data, "hex");
    }
    const context = blake.blake2bInit(20, key);
    blake.blake2bUpdate(context, data);
    return (0, utility_1.toHex)(blake.blake2bFinal(context));
};
exports.blake160WithKey = blake160WithKey;
/**
 * Gets data's 128 bit blake hash.
 * @param data buffer or hexadecimal string
 * @returns 16 byte hexadecimal string
 */
const blake128 = (data) => {
    if (!(data instanceof Buffer)) {
        data = Buffer.from(data, "hex");
    }
    const context = blake.blake2bInit(16, null);
    blake.blake2bUpdate(context, data);
    return (0, utility_1.toHex)(blake.blake2bFinal(context));
};
exports.blake128 = blake128;
/**
 * Gets data's 128 bit blake hash by using the key.
 * @param data buffer or hexadecimal string
 * @param key
 * @returns 16 byte hexadecimal string
 */
const blake128WithKey = (data, key) => {
    if (!(data instanceof Buffer)) {
        data = Buffer.from(data, "hex");
    }
    const context = blake.blake2bInit(16, key);
    blake.blake2bUpdate(context, data);
    return (0, utility_1.toHex)(blake.blake2bFinal(context));
};
exports.blake128WithKey = blake128WithKey;
/**
 * Gets data's 160 bit RIPEMD hash.
 * @param data buffer or hexadecimal string
 * @returns 20 byte hexadecimal string
 */
const ripemd160 = (data) => {
    if (!(data instanceof Buffer)) {
        data = Buffer.from(data, "hex");
    }
    return (0, crypto_js_1.RIPEMD160)(crypto_js_1.enc.Hex.parse(data.toString("hex"))).toString();
};
exports.ripemd160 = ripemd160;
//# sourceMappingURL=hash.js.map