import { useState, useEffect, useCallback } from "react";
import { IToken } from "../interfaces";
import { useCryptoPunkContract } from "./useCryptoPunkContract";

export const useTokens = () => {

  const cryptoPunkContract = useCryptoPunkContract();

  const [tokens, setTokens] = useState<IToken[]>([]);
  const [totalSupply, setTotalSupply] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  const loadData = useCallback(async () => {
    if (cryptoPunkContract) {
      setLoading(true);
      const _totalSupply = await cryptoPunkContract.methods.totalSupply().call();
      setTotalSupply(Number(_totalSupply));

      const tokenIds = new Array(Number(totalSupply));
      for (let i = 1; i <= tokenIds.length; i++) {
        tokenIds[i - 1] = i;
      }

      const tokensPromise = tokenIds.map(async (tokenId) => {
        const tokenURI = await cryptoPunkContract.methods.tokenURI(tokenId).call();
        const owner = await cryptoPunkContract.methods.ownerOf(tokenId).call();
        const _token = await fetch(tokenURI).then((response: any) => response.json())
        _token.tokenId = tokenId;
        _token.owner = owner;
        return _token;
      })

      const _tokens = await Promise.all(tokensPromise);
      setTokens(_tokens);

      setLoading(false);
    }
  }, [cryptoPunkContract, totalSupply]);

  useEffect(() => {
    loadData();
  }, [loadData])

  return { loading, tokens, totalSupply };
}