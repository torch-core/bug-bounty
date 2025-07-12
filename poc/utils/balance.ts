import { Address } from "@ton/core";
import { Blockchain } from "@ton/sandbox";
import { JettonMaster, JettonWallet } from "@ton/ton";

/**
 * @dev Retrieves the TON balance of a given contract address in the sandbox environment.
 *
 * @param {Blockchain} blockchain - The TON blockchain sandbox instance.
 * @param {Address} contractAddress - The address of the contract to query.
 *
 * @returns {Promise<bigint>} The TON balance of the contract as a bigint.
 */
export async function getTonBalance(
  blockchain: Blockchain,
  contractAddress: Address
): Promise<bigint> {
  const contract = await blockchain.getContract(contractAddress);
  return contract.balance;
}

/**
 * @dev Retrieves Jetton balances for one or more Jetton master addresses for a given user.
 *      Balances are returned in the order of the input Jetton master addresses.
 *      Handles errors by logging and returning 0n for failed queries.
 *
 * @param {Blockchain} blockchain - The TON blockchain sandbox instance.
 * @param {Address | Address[]} jettonMasterAddrs - One or more Jetton master addresses to query.
 * @param {Address} userAddress - The user's address whose Jetton wallets to query.
 *
 * @returns {Promise<bigint[]>} An array of Jetton balances (bigint) in the order of input addresses.
 */
export async function getJettonBalances(
  blockchain: Blockchain,
  jettonMasterAddrs: Address | Address[],
  userAddress: Address
): Promise<bigint[]> {
  const addrs = Array.isArray(jettonMasterAddrs)
    ? jettonMasterAddrs
    : [jettonMasterAddrs];
  const balances: bigint[] = [];

  const results = await Promise.all(
    addrs.map(async (jettonMasterAddr) => {
      try {
        const jettonMaster = blockchain.openContract(
          JettonMaster.create(jettonMasterAddr)
        );
        const userWalletAddr = await jettonMaster.getWalletAddress(userAddress);
        const userWallet = blockchain.openContract(
          JettonWallet.create(userWalletAddr)
        );
        return await userWallet.getBalance();
      } catch (error) {
        console.error(`Error fetching balance for ${jettonMasterAddr}:`, error);
        return 0n;
      }
    })
  );

  return results;
}
