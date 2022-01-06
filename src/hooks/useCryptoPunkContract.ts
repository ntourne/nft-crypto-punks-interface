import { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import { CryptoPunkNFT } from "../config/web3/contracts";

export const useCryptoPunkContract = () => {
  const { active, library, chainId } = useWeb3React();

  const cryptoPunkContract = useMemo(() => {
    if (active && library && chainId && CryptoPunkNFT) {
      return new library.eth.Contract(
        CryptoPunkNFT.abi,
        CryptoPunkNFT.address[chainId]
      );
    }
  }, [active, library, chainId]);

  return cryptoPunkContract;
};
