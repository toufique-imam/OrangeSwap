import { ChainId ,Token,WCRO} from '@pancakeswap/sdk'
import { USDT_CRO, CRO_MAINNET } from './common'

export const croTokens = {
    wcro: WCRO[ChainId.CRO],
    // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
    cro: CRO_MAINNET,
    usdt:USDT_CRO,
    
  }