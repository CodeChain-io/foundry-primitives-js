"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyEd25519 = exports.signEd25519 = void 0;
const nacl = require("tweetnacl");
const utility_1 = require("../utility");
/**
 * Gets EdDSA(Ed25519) signature for message from private key.
 * @param message 32 byte hexadecimal string
 * @param priv 64 byte hexadecimal string of private key
 * @returns 64 byte hexadecimal string of Ed25519 signature
 */
const signEd25519 = (message, priv) => {
    return (0, utility_1.toHex)(Buffer.from(nacl.sign.detached((0, utility_1.toArray)(message), (0, utility_1.toArray)(priv))));
};
exports.signEd25519 = signEd25519;
/**
 * Checks if the signature from signEd25519 is valid.
 * @param message 32 byte hexadecimal string
 * @param signature 64 byte hexadecimal string of Ed25519 signature
 * @param pub 32 byte hexadecimal string of public key
 * @returns if signature is valid, true. Else false.
 */
const verifyEd25519 = (message, signature, pub) => {
    return nacl.sign.detached.verify((0, utility_1.toArray)(message), (0, utility_1.toArray)(signature), (0, utility_1.toArray)(pub));
};
exports.verifyEd25519 = verifyEd25519;
//# sourceMappingURL=ed25519.js.map