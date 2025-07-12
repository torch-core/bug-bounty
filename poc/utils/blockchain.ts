import {
  Address,
  beginCell,
  Cell,
  Dictionary,
  SenderArguments,
  TonClient4,
} from "@ton/ton";
import {
  Blockchain,
  RemoteBlockchainStorage,
  wrapTonClient4ForRemote,
  internal,
  SendMessageResult,
} from "@ton/sandbox";

export const tonClient = new TonClient4({
  endpoint: "https://mainnet-v4.tonhubapi.com",
});

/**
 * @dev Initializes a TON blockchain sandbox environment for local simulation, optionally starting at a specific block sequence number.
 *      Sets up remote storage using a wrapped TON client and preloads a library dictionary with USDT Jetton wallet code for accurate contract emulation.
 *      This function is essential for creating a safe, isolated testing environment without mainnet interactions.
 *
 * @param {number} [blockSeqno] - Optional block sequence number to initialize the blockchain at (defaults to the latest if omitted).
 *
 * @returns {Promise<Blockchain>} A promise that resolves to the initialized Blockchain sandbox instance.
 */
export async function initialize(blockSeqno?: number) {
  const blockchain = await Blockchain.create({
    storage: new RemoteBlockchainStorage(
      wrapTonClient4ForRemote(tonClient),
      blockSeqno
    ),
  });
  const libsDict = Dictionary.empty(
    Dictionary.Keys.Buffer(32),
    Dictionary.Values.Cell()
  );
  const usdtJettonWalletCode = Cell.fromHex(
    "b5ee9c7241020f010003d1000114ff00f4a413f4bcf2c80b01020162050202012004030021bc508f6a2686981fd007d207d2068af81c0027bfd8176a2686981fd007d207d206899fc152098402f8d001d0d3030171b08e48135f038020d721ed44d0d303fa00fa40fa40d104d31f01840f218210178d4519ba0282107bdd97deba12b1f2f48040d721fa003012a0401303c8cb0358fa0201cf1601cf16c9ed54e0fa40fa4031fa0031f401fa0031fa00013170f83a02d31f012082100f8a7ea5ba8e85303459db3ce0330c0602d0228210178d4519ba8e84325adb3ce034218210595f07bcba8e843101db3ce032208210eed236d3ba8e2f30018040d721d303d1ed44d0d303fa00fa40fa40d1335142c705f2e04a403303c8cb0358fa0201cf1601cf16c9ed54e06c218210d372158cbadc840ff2f0080701f2ed44d0d303fa00fa40fa40d106d33f0101fa00fa40f401d15141a15288c705f2e04926c2fff2afc882107bdd97de01cb1f5801cb3f01fa0221cf1658cf16c9c8801801cb0526cf1670fa02017158cb6accc903f839206e943081169fde718102f270f8380170f836a0811a7770f836a0bcf2b0028050fb00030903f4ed44d0d303fa00fa40fa40d12372b0c002f26d07d33f0101fa005141a004fa40fa4053bac705f82a5464e070546004131503c8cb0358fa0201cf1601cf16c921c8cb0113f40012f400cb00c9f9007074c8cb02ca07cbffc9d0500cc7051bb1f2e04a09fa0021925f04e30d26d70b01c000b393306c33e30d55020b0a09002003c8cb0358fa0201cf1601cf16c9ed54007a5054a1f82fa07381040982100966018070f837b60972fb02c8801001cb055005cf1670fa027001cb6a8210d53276db01cb1f5801cb3fc9810082fb00590060c882107362d09c01cb1f2501cb3f5004fa0258cf1658cf16c9c8801001cb0524cf1658fa02017158cb6accc98011fb0001f203d33f0101fa00fa4021fa4430c000f2e14ded44d0d303fa00fa40fa40d15309c7052471b0c00021b1f2ad522bc705500ab1f2e0495115a120c2fff2aff82a54259070546004131503c8cb0358fa0201cf1601cf16c921c8cb0113f40012f400cb00c920f9007074c8cb02ca07cbffc9d004fa40f401fa00200d019820d70b009ad74bc00101c001b0f2b19130e2c88210178d451901cb1f500a01cb3f5008fa0223cf1601cf1626fa025007cf16c9c8801801cb055004cf1670fa024063775003cb6bccccc945370e00b42191729171e2f839206e938124279120e2216e94318128739101e25023a813a0738103a370f83ca00270f83612a00170f836a07381040982100966018070f837a0bcf2b0048050fb005803c8cb0358fa0201cf1601cf16c9ed5401f9319e"
  );
  libsDict.set(usdtJettonWalletCode.hash(), usdtJettonWalletCode);

  blockchain.libs = beginCell().storeDictDirect(libsDict).endCell();
  return blockchain;
}

/**
 * @dev Simulates sending one or more messages (transactions) in the TON sandbox environment.
 *      This function ensures the sender has sufficient balance before sending and handles both single and multiple arguments.
 *      It emulates on-chain behavior without actual mainnet impact.
 *
 * @param {Blockchain} blockchain - The TON blockchain sandbox instance for simulation.
 * @param {Address} from - The sender's address.
 * @param {SenderArguments | SenderArguments[]} args - The sender arguments, which can be a single object or an array of objects.
 *                                             Each argument must include 'to', 'value', and 'body'.
 *
 * @returns {Promise<SendMessageResult[]>} An array of send message results from the sandbox.
 *
 * @throws {Error} If the body is missing in any argument.
 * @throws {Error} If the sender's balance is insufficient for any argument's value.
 */
export async function blockchainSend(
  blockchain: Blockchain,
  from: Address,
  args: SenderArguments | SenderArguments[]
) {
  let argsList: SenderArguments[] = Array.isArray(args) ? args : [args];
  const result: SendMessageResult[] = [];

  for (const arg of argsList) {
    if (!arg.body) {
      throw new Error("Body is required");
    }

    const fromBalance = (await blockchain.getContract(from)).balance;
    if (fromBalance < arg.value) {
      throw new Error("Insufficient balance");
    }

    const r = await blockchain.sendMessage(
      internal({
        from: from,
        to: arg.to,
        value: arg.value,
        body: arg.body!,
      })
    );
    result.push(r);
  }
  return result;
}
