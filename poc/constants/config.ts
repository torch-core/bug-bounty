import { Address } from "@ton/core";
import { Asset } from "@torch-finance/core";

// Stable Swap
export abstract class PoolAssets {
  static readonly TON = Asset.ton();
  static readonly TS_TON = Asset.jetton(
    "EQC98_qAmNEptUtPc7W6xdHh_ZHrBUFpw5Ft_IzNU20QAJav"
  );
  static readonly ST_TON = Asset.jetton(
    "EQDNhy-nxYFgUqzfUzImBEP67JqsyMIcyk2S5_RwNNEYku0k"
  );
  static readonly USDT = Asset.jetton(
    "EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs"
  );
  static readonly TGUSD = Asset.jetton(
    "EQCJ7ASxOkI6Ws5Bh8J74XZbRX8861jFgTZT42DXv71-UISf"
  );
  static readonly STGUSD = Asset.jetton(
    "EQC2OdSIRyDofBjKYtR-ZN-Xk3eHN9gEujY7deoHNRBdZ5QG"
  );
}

export abstract class PoolAddresses {
  static readonly TRI_TON_POOL = Address.parse(
    "EQA4r_ieO3vJjsQtakcFu-iHpT1LFxdZkwV8yqNNElSmUW45"
  );
  static readonly TGUSD_USDT_POOL = Address.parse(
    "EQBNortP95ywf-PD_uLqkom1Z6RmRVFSTsCdT43wwI5OdcTb"
  );
  static readonly TGUSD_STGUSD_POOL = Address.parse(
    "EQBkmk4N8detuzLeqWGLGs5_isJxBm9uRTF86Cmo2-V4sqUk"
  );
}

export abstract class VaultAddresses {
  static readonly TON_VAULT = Address.parse(
    "EQAD79HyTmWusgoNqskzACSOtramap4FjyUY1KB3ZwlHgRjA"
  );
  static readonly TSTON_VAULT = Address.parse(
    "EQCSH0-POFXgFTlEZwWn8IcyJvFlIibjsS1gN7voiFFKWkmv"
  );
  static readonly STTON_VAULT = Address.parse(
    "EQAWue74OejnO37fDPnZkLSC1Qz89qdquvoV-_t7U0UnteKa"
  );
  static readonly TRI_TON_POOL_LP_VAULT = Address.parse(
    "EQC1Wd0Rx7vWuKiMguZO2btwYIwty0Q7ptZR51vnkINzgnIe"
  );
  static readonly USDT_VAULT = Address.parse(
    "EQB5PNTs08iDKQEURsCSasmzqpB55ox_FEegJ-09xqnG5IB7"
  );
  static readonly TGUSD_VAULT = Address.parse(
    "EQBEF45WELOoRvS87E2pXzsmgJAy_St3WR3ISJPWNMyckYJ7"
  );
  static readonly STGUSD_VAULT = Address.parse(
    "EQAqBkKeWvAfB8Yd9P50GMXkMvx_uEr0ukANm2gc0Rr6qaOk"
  );
  static readonly TGUSD_USDT_POOL_LP_VAULT = Address.parse(
    "EQDN0jI_wRwaeLZg8xORwRn8iF8B9YBfaF2H-Vude5OJHAbR"
  );
  static readonly TGUSD_STGUSD_POOL_LP_VAULT = Address.parse(
    "EQAArg70sM0eEtD7TMNovw7DllyIQYoQu5AecKmgXNihmP3a"
  );
}

export const FACTORY_ADDRESS = Address.parse(
  "EQDQIhFLSzUlaHKM9L2ZQS-o0iNHTbOSBtzNC0VLxPbNFH6E"
);

// Telegram USD
export abstract class TelegramUSD {
  static readonly TGUSD_JETTON_MASTER = Asset.jetton(
    "EQCJ7ASxOkI6Ws5Bh8J74XZbRX8861jFgTZT42DXv71-UISf"
  );
  static readonly STGUSD_JETTON_MASTER = Asset.jetton(
    "EQC2OdSIRyDofBjKYtR-ZN-Xk3eHN9gEujY7deoHNRBdZ5QG"
  );
  static readonly ENGINE = Address.parse(
    "EQBugHw3qUX71i5_mbUMYUAUnxdy513v5zKeLZdVhCp1J8xI"
  );
  static readonly STAKING = Address.parse(
    "EQDsRxOvYyhOAi-zHBSN2NkHcjwFB1aaMSnqJG7Chm14x02P"
  );
}

export const TGUSD_API_URL = "https://tgusd-api.torch.finance";
