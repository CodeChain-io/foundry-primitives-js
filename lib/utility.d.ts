/// <reference types="node" />
import BigNumber from "bignumber.js";
/**
 * Converts buffer to hexadecimal string.
 * @param buffer arbritrary length of data
 * @returns hexadecimal string
 */
export declare const toHex: (buffer: Buffer) => string;
/**
 * Converts hexadecimal string to Uint8Array.
 * @param string arbritrary length of data
 * @returns Uint8Array
 */
export declare const toArray: (hex: string) => Uint8Array;
/**
 * Gets account id from private key.
 * @param priv 32 byte hexadecimal string of private key
 * @returns 20 byte hexadecimal string of account id
 */
export declare const getAccountIdFromPrivate: (priv: string) => string;
/**
 * Gets account id from the given public key.
 * @param publicKey 64 byte hexadecimal string of uncompressed public key
 * @returns 20 byte hexadecimal string of account id
 */
export declare const getAccountIdFromPublic: (publicKey: string) => string;
/**
 * Converts BigNumber to formatted number string
 * Default decimalSeparator is point: "."
 * Default groupSeparator is comma; ","
 * Default groupSize is 3
 * @param num BigNumber object
 * @returns formatted number string
 */
export declare const toLocaleString: (num: BigNumber) => string;
