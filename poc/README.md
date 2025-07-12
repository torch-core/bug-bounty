# POC Templates

This section provides a safe and standardized environment for reproducing vulnerabilities in the Torch Stable Swap and Telegram USD contract.
Using the [TON sandbox](https://github.com/ton-org/sandbox), you can simulate contract behavior locally without any interaction with the mainnet.

## Important Warnings

- This POC environment uses TON sandbox to emulate transactions. It does not interact with or impact real on-chain contracts. **Do not perform any actual operations on the mainnet contracts**—all testing must remain in simulation mode to avoid risks or violations of the program rules.
- **Do not fork the repository**. Work locally by cloning the repo, modifying files, and submitting your reproduction script via email as an attachment. This ensures confidentiality and complies with the disclosure guidelines.

## How to Use

Follow these steps to reproduce a vulnerability:

1. **Clone the Repository Locally**:

   ```
   git clone https://github.com/torch-core/bug-bounty.git
   cd bug-bounty
   ```

   (Do not fork — to prevent exposing the reproduction steps and creating a security risk.)

2. **Install Dependencies**:

   ```
   pnpm install
   ```

3. **Create Your Reproduction Script**:  
   Use `example.spec.ts` as a reference. Copy it to a new file inside the poc/reproduction folder and rename it to reflect your vulnerability:

   ```
   cp poc/reproduction/example.spec.ts poc/reproduction/xxx-vuln.spec.ts
   ```

   Edit `xxx-vuln.spec.ts` to implement your specific vulnerability reproduction logic.

4. **Run the Test**:

   ```
   pnpm test poc/reproduction/example.spec.ts
   ```

   Verify the output (e.g., balance changes) confirms the vulnerability.

5. **Submit Your Report**:  
   Attach the modified `xxx-vuln.spec.ts` file, along with test output logs/screenshots, to your email report (as per the Bug Bounty README's ["How to Submit Reports" section](https://github.com/torch-core/bug-bounty/tree/main?tab=readme-ov-file#how-to-submit-reports)). Do not push changes or share publicly.

   > **Note**: This is just an example template. If the vulnerability cannot be reproduced using this method, please use any other clear format that allows us to quickly and easily understand the issue (e.g., a detailed script, step-by-step commands, or alternative simulation tools).

## Available Features

The POC template includes utility functions to simplify testing in the TON sandbox environment. Here's a brief overview:

### Predefined Configurations

The PoC template includes predefined configs for assets, pools and factory addresses, tgUSD-related addresses, and tgUSD API URL—making it easier to write standardized tests for Torch Stable Swap and tgUSD

You can import these from the [config file](https://github.com/torch-core/bug-bounty/blob/main/poc/constants/config.ts) and use them directly in your code.

### Initializing the Blockchain

- **initialize**: Initializes the TON blockchain sandbox for simulation, optionally at a specific block sequence number.  
  Example usage:
  ```typescript
  const blockchain = await initialize(); // Defaults to the latest block
  // Or with a specific block:
  const blockchain = await initialize(49208579); // Initialize at block 49208579
  ```

### Getting Balances

- **getTonBalance**: Retrieves the TON balance of a given address.  
  Example usage:

  ```typescript
  const senderTonBalance = await getTonBalance(blockchain, myWalletAddr);
  console.log(`TON Balance: ${formatUnits(senderTonBalance)} TON`);
  ```

- **getJettonBalances**: Retrieves Jetton balances for multiple Jetton master addresses (returns an array in the order of input addresses).  
  Example usage:
  ```typescript
  const balances = await getJettonBalances(
    blockchain,
    [PoolAssets.TS_TON.jettonMaster!, PoolAssets.ST_TON.jettonMaster!],
    myWalletAddr
  );
  console.log(`tsTON Balance: ${formatUnits(balances[0])} tsTON`);
  console.log(`stTON Balance: ${formatUnits(balances[1])} stTON`);
  ```

### Using Torch Stable Swap SDK

- @torch-finance/sdk: This SDK is integrated for interacting with Torch Finance features, such as generating swap payloads.
- For detailed tutorials refer to the [DEX SDK Guide](https://doc.torch.finance/dex/developer-guide/dex-sdk-guide).

### Using Telegram USD SDK

- @torch-finance/tgusd-sdk: This SDK is integrated for interacting with Telegram USD features, such as generating mint payloads.
- For detailed tutorials refer to the [tgUSD SDK Guide](https://doc.torch.finance/telegram-usd/technical/telegram-usd-sdk).


### Sending Simulated Transactions

- **blockchainSend**: Simulates sending messages (transactions) in the sandbox. It supports single or multiple arguments and checks for sufficient balance before sending.  
  Example usage:
  ```typescript
  // Send swap
  const senderArg = await torchSDK.getSwapPayload(myWalletAddr, {
    mode: "ExactIn",
    assetIn: PoolAssets.TS_TON,
    assetOut: PoolAssets.TON,
    amountIn: amountIn,
    deadline: BigInt(Math.floor(Date.now() / 1000) + 60 * 60),
    recipient: PoolAddresses.TRI_TON_POOL_ADDRESS,
  });
  await blockchainSend(blockchain, myWalletAddr, senderArg);
  ```
  This function emulates on-chain sends safely in the sandbox. Use it to test payloads without real impacts.

## Notes

- Ensure your reproduction proves a critical impact (e.g., fund drain or unauthorized access).
- In addition to the POC, provide a detailed and clear explanation in your submission email, including the vulnerability description, steps, and impact analysis.
- For more details on the Bug Bounty program, refer to the [here](https://github.com/torch-core/bug-bounty?tab=readme-ov-file#torch-finance-bug-bounty-program).
