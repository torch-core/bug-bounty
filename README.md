# Torch Finance Bug Bounty Program

# Introduction

[Torch Stable Swap](https://torch.finance/) enables low-slippage trading for assets such as LSTs and stablecoins. It is built on the Curve Stable Swap formula, written in FunC, and was the winner of the official [Curve competition hosted by TON](https://blog.ton.org/infrastructures-for-stable-assets-with-curve).

# Resources

- [Smart contracts](https://github.com/torch-core/torch-dex-contract)
- [Document](https://doc.torch.finance/dex)
- [SDK](https://github.com/torch-core/torch-sdk)
- [Dex Contract Wrapper](https://github.com/torch-core/dex-contract-wrapper)
- [Poc Template](https://github.com/torch-core/dex-bug-bounty/tree/main/poc)

# Scope

All code in the [contracts folder](https://github.com/torch-core/torch-dex-contract/tree/main/contracts) is in scope, except for imports (stdlib.fc) and code in the mock folder.

# Reward

- Rewards are only provided for Critical vulnerabilities, with a maximum reward value of up to $20,000 USD.
- The final reward amount is determined based on the impact and exploitability of the vulnerability
- No KYC required.
- Payments are made via TON chain wallet addresses.

Reward Levels:

| Severity | Reward            |
| -------- | ----------------- |
| Critical | Up to $20,000 USD |

We also welcome submissions of non-critical issues, which may not be eligible for rewards but can help strengthen the protocol’s overall quality. At our discretion, we may offer small thank-you gifts to acknowledge valuable contributions.

# Focus Area

## In Scope Vulnerabilities: Smart Contracts

We are looking for issues that cause abnormal behavior in smart contracts, which may trigger unexpected or erroneous functions.

The following are examples of Critical level vulnerabilities (but not limited to these):

- 🚨 Theft of Vault assets (e.g., direct fund loss).
- 🚨 Theft of assets using unexpected logic (e.g., bypassing contract validation of swap in amounts, swapping out large amounts of assets).
- 🚨 Execution of operations that should not be performed (e.g., regular users executing admin-exclusive operations).
- 🚨 Permanent freezing of funds (e.g., assets unable to be withdrawn or swapped due to contract errors, excluding liquidity shortages).

To ensure the validity of the report, please provide sufficient evidence to prove that the vulnerability **can actually be triggered and reproduced**.

## Out of Scope Vulnerabilities: Smart Contracts

The following vulnerabilities are excluded from rewards:

- Theoretical vulnerabilities without any proof or demonstration.
- Impacts caused by the reporter exploiting the vulnerability themselves, leading to damage.
- Impacts requiring access through leaked keys or credentials.
- Attacks requiring privileged addresses (admin) permissions.
- Impacts caused by third-party data sources or oracle issues (including delays or inaccurate data).
- Issues related to centralized component risks.
- Impacts due to lack of liquidity.
- Best practice issues (e.g., gas optimization, code style violations, redundant code).
- Fund losses due to price slippage.

# Program Rules

- Strictly prohibit direct interactions with mainnet contracts or causing any impact; only view execution results through emulation.
- Do not damage or restrict the availability of products, services, or infrastructure, thereby interrupting any services.
- Avoid using web application scanners or automated tools for vulnerability searches that generate large amounts of traffic.
- Do not exploit any DoS/DDoS vulnerabilities, social engineering attacks, or spam.
- Do not violate any laws and stay within the defined scope.
- Any details of discovered vulnerabilities must not be disclosed to anyone outside the team without proper permission.

# PoC Submission Guidelines

To standardize the reproduction of vulnerabilities and improve review efficiency, we provide a [PoC Template](https://github.com/torch-core/dex-bug-bounty/tree/main/poc) located in the `poc` folder.

> 🔧 Please use our provided PoC Template as much as possible to write the vulnerability reproduction process. This helps us understand and verify your report more quickly and accurately.

If your vulnerability type exceeds the scope supported by the Template, you may use other formats, but **must provide complete and clear reproduction steps**, including commands, operational processes, and necessary explanations, otherwise it may not be accepted.

# How to Submit Reports

All vulnerability reports must be sent directly to [contract@torch.finance](mailto:contract@torch.finance).

To standardize the format, please copy and use the template provided in [Report Template](https://github.com/torch-core/dex-bug-bounty/blob/main/report-template.md).

**Notes**:

- Submissions must strictly follow the required format
- Reports must be written in English.
- Please provide detailed and concise reproduction steps.
- The team will review the report within 2-3 days of receipt and reply with the results (e.g., confirmation, rejection, or request for supplements).
- All reports are strictly confidential; do not discuss or disclose without permission.

# Disclosure Guidelines

- Do not discuss this program or any vulnerabilities (even resolved ones) outside the program without explicit consent from the organization.
- No vulnerability disclosure, including partial disclosure, is allowed at this time.

# Eligibility and Coordinated Disclosure

We appreciate and thank everyone who submits valid reports that help us improve security. However, only reports meeting the following eligibility requirements may qualify for a reward:

- You must be the first reporter of the vulnerability.
- The vulnerability must be qualified (Critical only).
- Any discovered vulnerabilities must be reported exclusively through [contract@torch.finance](mailto:contract@torch.finance).
- Follow [Report Template](https://github.com/torch-core/dex-bug-bounty/blob/main/report-template.md) for format, steps, and PoC requirements.
- You must not be a former or current employee/contributor of ours.
- Provide detailed but concise reproduction steps, proving reproducibility through TON simulator.

# Contact

If you have any questions about this Bug Bounty program, please contact us through the following methods:

📧 Email: contract@torch.finance

We will reply to your inquiry as soon as possible.
