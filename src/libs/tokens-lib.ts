import { CryptoPunkNFT } from "../config/web3/contracts";

export const findTokenByIndex = (library: any, tokenId: number) => {
    return new library.eth.Contract(
        CryptoPunkNFT.abi,
        CryptoPunkNFT.address?.chainId
    ).methods.tokeyByIndex(tokenId);
}