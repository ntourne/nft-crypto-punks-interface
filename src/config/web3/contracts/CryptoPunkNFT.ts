import CHAIN_ID from '../chainId';

import { abi } from "./artifacts/CryptoPunkNFT.json";

const CryptoPunkNFT: any = { abi, address: {} };
CryptoPunkNFT.address[CHAIN_ID.RINKEBY] = process.env.REACT_APP_CRYPTO_PUNK_ADDRESS_RINKEBY;
export default CryptoPunkNFT;