import { Address } from "@ton/core";
import { Asset } from "@torch-finance/core";

export abstract class PoolAssets {
  static readonly TON = Asset.ton();
  static readonly TS_TON = Asset.jetton(
    "EQC98_qAmNEptUtPc7W6xdHh_ZHrBUFpw5Ft_IzNU20QAJav"
  );
  static readonly ST_TON = Asset.jetton(
    "EQDNhy-nxYFgUqzfUzImBEP67JqsyMIcyk2S5_RwNNEYku0k"
  );
}

export abstract class PoolAddresses {
  static readonly TRI_TON_POOL_ADDRESS = Address.parse(
    "EQA4r_ieO3vJjsQtakcFu-iHpT1LFxdZkwV8yqNNElSmUW45"
  );
}

export abstract class VaultAddresses {
  static readonly TON_VAULT_ADDRESS = Address.parse(
    "EQAD79HyTmWusgoNqskzACSOtramap4FjyUY1KB3ZwlHgRjA"
  );
}

export const FACTORY_ADDRESS = Address.parse(
  "EQDQIhFLSzUlaHKM9L2ZQS-o0iNHTbOSBtzNC0VLxPbNFH6E"
);
