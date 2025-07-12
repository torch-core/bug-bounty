import { Address, beginCell, toNano } from "@ton/core";
import { initialize, blockchainSend } from "../utils/blockchain";
import { Blockchain } from "@ton/sandbox";
import { TorchSDK } from "@torch-finance/sdk";
import { PoolAddresses, PoolAssets } from "../constants/config";
import { formatUnits } from "../utils/format";
import { getJettonBalances } from "../utils/balance";

describe("PoC Example", () => {
  jest.setTimeout(30000);

  let blockchain: Blockchain;
  let torchSDK: TorchSDK;

  beforeAll(async () => {
    blockchain = await initialize();
    torchSDK = new TorchSDK();
  });
  it("should be able to reproduce the attack", async () => {
    // This address only has tsTON and TON, so if you need other assets, you need to change the address
    const myWalletAddr = Address.parse(
      "UQChc1fIWCxkvP58259wiX9qLjCn0c2ZwCO9cVmL3EkZi0MN"
    );

    // Get sender tsTON and stTON Balances Before
    const senderJettonBalancesBefore = await getJettonBalances(
      blockchain,
      [PoolAssets.TS_TON.jettonMaster!, PoolAssets.ST_TON.jettonMaster!],
      myWalletAddr
    );
    const senderTsTONBalanceBefore = senderJettonBalancesBefore[0];
    const senderStTONBalanceBefore = senderJettonBalancesBefore[1];

    // TODO: Start to reproduce the attack
    const amountIn = toNano("0.3");
    const forwardPayload = beginCell()
      .storeStringTail("Attack Payload")
      .endCell();

    // Send swap
    const senderArg = await torchSDK.getSwapPayload(myWalletAddr, {
      mode: "ExactIn",
      assetIn: PoolAssets.TS_TON,
      assetOut: PoolAssets.TON,
      amountIn: amountIn,
      deadline: BigInt(Math.floor(Date.now() / 1000) + 60 * 60),
      recipient: PoolAddresses.TRI_TON_POOL_ADDRESS,
      fulfillPayload: forwardPayload,
    });
    await blockchainSend(blockchain, myWalletAddr, senderArg);

    // Get sender tsTON and stTON Balances After
    const senderJettonBalancesAfter = await getJettonBalances(
      blockchain,
      [PoolAssets.TS_TON.jettonMaster!, PoolAssets.ST_TON.jettonMaster!],
      myWalletAddr
    );
    const senderTsTONBalanceAfter = senderJettonBalancesAfter[0];
    const senderStTONBalanceAfter = senderJettonBalancesAfter[1];

    // Expect sender tsTON balance should decrease by amountIn
    expect(senderTsTONBalanceAfter).toBe(senderTsTONBalanceBefore - amountIn);
    console.log(
      `sender tsTON Balance Change: ${formatUnits(
        senderTsTONBalanceAfter - senderTsTONBalanceBefore,
        9
      )} tsTON`
    );

    // Expect sender stTON balance should increase larger than it should be ... (If attack is successful)
    // expect(senderStTONBalanceAfter).toBeGreaterThan(senderStTONBalanceBefore);
    console.log(
      `sender stTON Balance Change: ${formatUnits(
        senderStTONBalanceAfter - senderStTONBalanceBefore,
        9
      )} stTON`
    );
  });
});
