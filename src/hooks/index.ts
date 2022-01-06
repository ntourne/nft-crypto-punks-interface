import { useState, useEffect, useCallback } from "react";
import { IToken } from "../interfaces";

import { useTruncatedAddress } from "./useTruncatedAddress";
import { useCryptoPunkContract } from "./useCryptoPunkContract";
import { useEthBalance } from "./useEthBalance";
import { useTokens } from "./useTokens";

export const useTokenByIndex = (index: number) => {

    const cryptoPunkContract = useCryptoPunkContract();

    const [token, setToken] = useState<IToken>();
    const [loading, setLoading] = useState(true);

    const loadData = useCallback(async () => {
        if (cryptoPunkContract) {
            setLoading(true);
            const _token = await cryptoPunkContract.methods.tokenByIndex(index).call();
            setToken(_token);
            setLoading(false);
        }
    }, [cryptoPunkContract, index]);

    useEffect(() => {
        loadData();
    }, [loadData])


    return { loading, token };
}


export const useTokenById = (tokenId: number) => {
    const cryptoPunkContract = useCryptoPunkContract();

    const [token, setToken] = useState<IToken>();
    const [loading, setLoading] = useState(true);

    const loadData = useCallback(async () => {
        if (cryptoPunkContract) {
            setLoading(true);

            const _token = await findTokenById(cryptoPunkContract, tokenId);
            /*
            const tokenURI = await cryptoPunkContract.methods.tokenURI(tokenId).call();
            const _token = await fetch(tokenURI).then((response: any) => response.json())
            */
            setToken(_token);
            setLoading(false);
        }
    }, [cryptoPunkContract, tokenId]);

    useEffect(() => {
        loadData();
    }, [loadData])

    return { loading, token };
}



export const useMintToken = (account: string) => {

    const cryptoPunkContract = useCryptoPunkContract();
    const [minting, setMinting] = useState(false);
    const [event, setEvent] = useState<any>();

    const mint = useCallback(async () => {
        if (cryptoPunkContract) {

            setMinting(true);
            cryptoPunkContract.methods
                .mint(account)
                .send({
                    from: account,
                })
                .on("error", (err: any) => {
                    console.error(err);

                    setEvent({ type: 'transactionHash', msg: 'Ups, error detected', description: err, status: 'error' })

                    setMinting(false);
                })
                .on("transactionHash", (txHash: string) => {

                    setEvent({ type: 'transactionHash', value: txHash, msg: `Transaction sent #${txHash}`, status: 'info' })
                })
                .on("receipt", () => {
                    setMinting(false);

                    setEvent({ type: 'receipt', msg: 'Transaction completed', status: 'success' })
                });
        }
    }, [cryptoPunkContract, account]);


    return { event, mint, minting };
}

const findTokenById = async (cryptoPunkContract: any, tokenId: number) => {
    try {

        const tokenURI = await cryptoPunkContract.methods.tokenURI(tokenId).call();
        const owner = await cryptoPunkContract.methods.ownerOf(tokenId).call();
        const token = await fetch(tokenURI).then((response: any) => response.json())
        token.tokenId = tokenId;
        token.owner = owner;
        return Promise.resolve(token);
    }
    catch (err) {
        console.error(err);
        return Promise.reject({ msg: 'Error fetching token by id', err });
    }
}


export { useTruncatedAddress, useCryptoPunkContract, useEthBalance, useTokens };