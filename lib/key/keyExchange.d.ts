export type X25519Public = string;
export type X25519Private = string;
/**
 * Gets an ECDH session key for encryption and decryption between two parties
 * @param otherPublic 32 byte hexadecimal string of the other side public key
 * @param myPrivate 32 byte hexadecimal string of my side private key
 * @returns 32 byte hexadecimal string of the shared secret
 */
export declare const exchange: (otherPublic: X25519Public, myPrivate: X25519Private) => string;
/**
 * Gets the X25519 public key(on Curve25519) for a private key
 * @param x25519Private 32 byte hexadecimal string of a secret key
 * @returns 32 byte hexadecimal string of the public key
 */
export declare const x25519GetPublicFromPrivate: (x25519Private: string) => string;
