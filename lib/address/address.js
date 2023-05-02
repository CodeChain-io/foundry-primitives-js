"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const buffer_1 = require("buffer");
const _ = require("lodash");
const hash_1 = require("../hash");
const utility_1 = require("../utility");
const H160_1 = require("../value/H160");
const H256_1 = require("../value/H256");
const bech32_1 = require("./bech32");
/**
 * The bech32 form of account id. The human readable part(HRP) is used to
 * represent the network. For address, the HRP is "ccc" for mainnet or
 * "tcc" for testnet.
 *
 * Refer to the spec for the details about Address.
 * https://github.com/CodeChain-io/codechain/blob/master/spec/CodeChain-Address.md
 */
class Address {
    static fromPublic(publicKey, options) {
        if (!H256_1.H256.check(publicKey)) {
            throw Error(`Invalid public key for creating Address: ${publicKey}`);
        }
        return Address.fromAccountId(getAccountIdFromPublic(H256_1.H256.ensure(publicKey).value), options);
    }
    static fromAccountId(accountId, options) {
        const { networkId, version = 1 } = options;
        if (!H160_1.H160.check(accountId)) {
            throw Error(`Invalid accountId for creating Address: "${accountId}"`);
        }
        if (version !== 1) {
            throw Error(`Unsupported version for Address: "${version}"`);
        }
        if (typeof networkId !== "string" || networkId.length !== 2) {
            throw Error(`Unsupported networkId for Address: "${networkId}"`);
        }
        const words = (0, bech32_1.toWords)(buffer_1.Buffer.from(_.padStart(version.toString(16), 2, "0") +
            H160_1.H160.ensure(accountId).value, "hex"));
        return new Address(H160_1.H160.ensure(accountId), (0, bech32_1.encode)(networkId + "c", words));
    }
    static fromString(address) {
        if (typeof address !== "string") {
            throw Error(`Expected Address string but found: "${address}"`);
        }
        else if (address.charAt(2) !== "c") {
            throw Error(`Unknown prefix for Address: ${address}`);
        }
        const { words } = (0, bech32_1.decode)(address, address.substr(0, 3));
        const bytes = (0, bech32_1.fromWords)(words);
        const version = bytes[0];
        if (version !== 1) {
            throw Error(`Unsupported version for Address: ${version}`);
        }
        const accountId = (0, utility_1.toHex)(buffer_1.Buffer.from(bytes.slice(1)));
        return new Address(new H160_1.H160(accountId), address);
    }
    static check(address) {
        return address instanceof Address ? true : Address.checkString(address);
    }
    static ensure(address) {
        if (address instanceof Address) {
            return address;
        }
        else if (typeof address === "string") {
            return Address.fromString(address);
        }
        else {
            throw Error(`Expected either Address or string but found ${address}`);
        }
    }
    static ensureAccount(address) {
        if (address instanceof Address) {
            // FIXME: verify network id
            return address.getAccountId();
        }
        else if (address instanceof H160_1.H160) {
            return address;
        }
        else if (address.match(`^(0x)?[a-fA-F0-9]{40}$`)) {
            return new H160_1.H160(address);
        }
        else {
            return Address.fromString(address).getAccountId();
        }
    }
    static checkString(value) {
        // FIXME: verify checksum
        return /^.{2}c[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{40}$/.test(value);
    }
    constructor(accountId, address) {
        this.accountId = accountId;
        this.value = address;
    }
    toString() {
        return this.value;
    }
    getAccountId() {
        return this.accountId;
    }
}
exports.Address = Address;
function getAccountIdFromPublic(publicKey) {
    if (typeof publicKey !== "string") {
        throw Error(`Unexpected parameter for getAccountIdFromPublic: ${publicKey}`);
    }
    // FIXME: Check 512-bit hexstring
    return (0, hash_1.blake160)(publicKey);
}
//# sourceMappingURL=address.js.map