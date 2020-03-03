import { toArray, toHex } from "../utility";

/**
 * @hidden
 */
const nacl = require("tweetnacl");

export type X25519Public = string;
export type X25519Private = string;

/**
 * Gets an ECDH session key for encryption and decryption between two parties
 * @param otherPublic 32 byte hexadecimal string of the other side public key
 * @param myPrivate 32 byte hexadecimal string of my side private key
 * @returns 32 byte hexadecimal string of the shared secret
 */
export const exchange = (
    otherPublic: X25519Public,
    myPrivate: X25519Private
): string => {
    const groupElement = toArray(otherPublic);
    const scalar = toArray(myPrivate);
    const sharedSecret = nacl.scalarMult(scalar, groupElement);
    return toHex(sharedSecret);
};
