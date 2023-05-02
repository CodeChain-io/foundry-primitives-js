"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPublicFromPrivate = exports.generatePrivateKey = void 0;
const nacl = require("tweetnacl");
const utility_1 = require("../utility");
/**
 * Generates a private key.
 * @returns 64 byte hexadecimal string of private key
 */
const generatePrivateKey = () => {
    return (0, utility_1.toHex)(Buffer.from(nacl.sign.keyPair().secretKey));
};
exports.generatePrivateKey = generatePrivateKey;
/**
 * Gets public key from private key.
 * @param priv 64 byte hexadecimal string of private key
 * @returns 32 byte hexadecimal string of public key
 */
const getPublicFromPrivate = (priv) => {
    return (0, utility_1.toHex)(Buffer.from(nacl.sign.keyPair.fromSecretKey((0, utility_1.toArray)(priv)).publicKey));
};
exports.getPublicFromPrivate = getPublicFromPrivate;
//# sourceMappingURL=key.js.map