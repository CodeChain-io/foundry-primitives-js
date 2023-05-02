"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x25519GetPublicFromPrivate = exports.exchange = void 0;
const utility_1 = require("../utility");
/**
 * @hidden
 */
const nacl = require("tweetnacl");
/**
 * Gets an ECDH session key for encryption and decryption between two parties
 * @param otherPublic 32 byte hexadecimal string of the other side public key
 * @param myPrivate 32 byte hexadecimal string of my side private key
 * @returns 32 byte hexadecimal string of the shared secret
 */
const exchange = (otherPublic, myPrivate) => {
    const groupElement = (0, utility_1.toArray)(otherPublic);
    const scalar = (0, utility_1.toArray)(myPrivate);
    const sharedSecret = nacl.scalarMult(scalar, groupElement);
    return (0, utility_1.toHex)(sharedSecret);
};
exports.exchange = exchange;
/**
 * Gets the X25519 public key(on Curve25519) for a private key
 * @param x25519Private 32 byte hexadecimal string of a secret key
 * @returns 32 byte hexadecimal string of the public key
 */
const x25519GetPublicFromPrivate = (x25519Private) => {
    const scalar = (0, utility_1.toArray)(x25519Private);
    const x25519Public = nacl.scalarMult.base(scalar);
    return (0, utility_1.toHex)(x25519Public);
};
exports.x25519GetPublicFromPrivate = x25519GetPublicFromPrivate;
//# sourceMappingURL=keyExchange.js.map