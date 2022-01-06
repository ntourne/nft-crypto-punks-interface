import { useState, useCallback } from "react";
import { useCryptoPunkContract } from "./useCryptoPunkContract";

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
