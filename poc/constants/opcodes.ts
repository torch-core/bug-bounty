// Stable Swap
export abstract class DexOp {
    static readonly Common = {
        TransferAdmin: 0x2b8af82e,
        UpdateSignerKey: 0xaf74dd1b,
        Update: 0x98253578,
        Comment: 0,
    };

    static readonly Jetton = {
        JettonTransfer: 0xf8a7ea5,
        JettonInternalTransfer: 0x178d4519,
        JettonNotification: 0x7362d09c,
        ProvideWalletAddress: 0x2c76b973,
        TakeWalletAddress: 0xd1735400,
        BurnNotification: 0x7bdd97de,
    };

    static readonly Factory = {
        DeployFactory: 0x2fcabd79,
        Install: 0x2fcabd79,
        CreateVault: 0xcbdf3140,
        CreateLpVault: 0x5482139c,
        CreateBasePool: 0x18d8d56e,
        CreateMetaPool: 0x1d1d68dd,
        DepositInternal: 0xf74b5f85,
        UpdatePoolCode: 0x50ae945a,
        UpdateVaultCode: 0x1ab12b78,
        UpdateAdminConfig: 0x9ad37959,
        UpdateLpAccountCode: 0xbdf95d49,
    };

    static readonly Pool = {
        Premint: 0x446077df,
        UpdateAdminFeeNumerator: 0xbcc232f0,
        UpdateFeeNumerator: 0x3a2e420d,
        CreateVaultSuccess: 0x416c25f4,
        ClaimAdminFee: 0x913e42af,
        RampA: 0xc951044f,
        StopRampA: 0x716143ab,
        DepositAll: 0xec328fb0,
        SwapInternal: 0xfcb1be1e,
        WithdrawInternal: 0x1a99da7b,
        DepositBetween: 0xde90e25c,
        SwapBetween: 0xffae5893,
        WithdrawBetween: 0xb4963cdc,
        StopPool: 0x45776b99,
        UnStopPool: 0x88a204a9,
    };

    static readonly Vault = {
        Deposit: 0x95db9d39,
        Withdraw: 0xb5de5f9e,
        Swap: 0x25938561,
        Payout: 0x4e2ea902,
        SuccessTonPayout: 0xb39f717e,
    };

    static readonly LpAccount = {
        CancelDeposit: 0xf31f8168,
    };
}

// Telegram USD
export abstract class TelegramUSDOp {
    static readonly Common = {
        Comment: 0,
        TopUp: 0xd372158c,
        Excess: 0xd53276db,
        Halt: 0xa8d19f57,
        Unhalt: 0xe2241ebe,
        Install: 0xe07784e5,
        ResetGas: 0x53a9192c,
        ChangeAdmin: 0x6501f354,
        ClaimAdmin: 0xfb88e119,
        ChangeJettonMasterAdmin: 0x7ba4e3ab,
        CallToJettonMaster: 0xadc0579b,
        CallTo: 0x235caf52,
        UpgradeContract: 0x2508d66a,
        ChangeJettonMasterContent: 0x8de1b72e,
    };

    static readonly Engine = {
        DepositFP: 0x8e5adeb3,
        RequestRedeem: 0x14d600b6,
        RepaidFp: 0x9d3f2308,
        Payout: 0x4982ac34,
        UpdateRedeemWhitelistRoot: 0xa8521e02,
        AddCollateralAsset: 0xa645e4d3,
        RemoveCollateralAsset: 0xaadca8e6,
        AddCustodialWallet: 0x3bd09fd5,
        RemoveCustodialWallet: 0x3749d3e0,
        UpdateRedeemAccountCode: 0x20b7b119,
        UpgradeRedeemAccount: 0x14ced2ae,
        UpgradeJettonMaster: 0xe5661dc8,
        TransferRewardFp: 0x86b871c3,
        CancelRedeem: 0x12ea5122,
        ForceClaim: 0x5f6c09a6,
        UpdateSignerKey: 0xa1c6eae2,
    };

    static readonly Staking = {
        StakeFp: 0xd4c3fdc0,
        UnstakeFp: 0x51656704,
        WithdrawInternal: 0xfa3ec18e,
        AllocateStaked: 0xe4692b7c,
        DeallocateStaked: 0x95663da,
        SupplyRewardFp: 0x5fe15c80,
        ProvideCurrentQuote: 0x984d8449,
        TakeCurrentQuote: 0x80ed6c2e,
        UpdateCooldownPeriod: 0xaa2eb3a8,
        UpdateVestingPeriod: 0xe9a09a01,
        UpdateUnstakeAccountCode: 0x658ce2c0,
        UpgradeUnstakeAccount: 0x240961d7,
        ForceWithdraw: 0xeb3a8986,
    };

    static readonly Jetton = {
        Transfer: 0xf8a7ea5,
        InternalTransfer: 0x178d4519,
        Notification: 0x7362d09c,
        ProvideWalletAddress: 0x2c76b973,
        TakeWalletAddress: 0xd1735400,
        BurnNotification: 0x7bdd97de,
        BurnExtraInfo: 0x85306c8c,
        Mint: 0x642b7d07,
        Burn: 0x595f07bc,
        SetStatus: 0xeed236d3,
        ChangeMetadataUri: 0xcb862902,
    };

    static readonly RedeemAccount = {
        Claim: 0x66a8f123,
        RollbackClaim: 0xbb427118,
        ClaimSuccess: 0xde3c731b,
        CancelRedeemInternal: 0x618b047b,
    };

    static readonly UnstakeAccount = {
        Withdraw: 0x4ca83dc8,
        RollbackWihtdraw: 0x1fcaa449,
    };
}
