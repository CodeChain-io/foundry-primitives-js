import { H160 } from "../value/H160";
import { H256Value } from "../value/H256";
export type AddressValue = Address | string;
/**
 * The bech32 form of account id. The human readable part(HRP) is used to
 * represent the network. For address, the HRP is "ccc" for mainnet or
 * "tcc" for testnet.
 *
 * Refer to the spec for the details about Address.
 * https://github.com/CodeChain-io/codechain/blob/master/spec/CodeChain-Address.md
 */
export declare class Address {
    static fromPublic(publicKey: H256Value, options: {
        networkId: string;
        version?: number;
    }): Address;
    static fromAccountId(accountId: H160 | string, options: {
        networkId: string;
        version?: number;
    }): Address;
    static fromString(address: string): Address;
    static check(address: any): boolean;
    static ensure(address: AddressValue): Address;
    static ensureAccount(address: Address | H160 | string): H160;
    private static checkString;
    readonly accountId: H160;
    readonly value: string;
    private constructor();
    toString(): string;
    getAccountId(): H160;
}
