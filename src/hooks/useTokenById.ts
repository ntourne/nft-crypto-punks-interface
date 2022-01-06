import { useState, useEffect, useCallback } from "react";
import { useCryptoPunkContract } from "./useCryptoPunkContract";
import { IToken } from "../interfaces";
import { findTokenById } from './utils';


export const useTokenById = (tokenId: number) => {
    const cryptoPunkContract = useCryptoPunkContract();

    const [token, setToken] = useState<IToken>();
    const [loading, setLoading] = useState(true);

    const loadData = useCallback(async () => {
        if (cryptoPunkContract) {
            setLoading(true);
            const _token = await findTokenById(cryptoPunkContract, tokenId);
            setToken(_token);
            setLoading(false);
        }
    }, [cryptoPunkContract, tokenId]);

    useEffect(() => {
        loadData();
    }, [loadData])

    return { loading, token };
}