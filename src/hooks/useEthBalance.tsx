import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";

export const useEthBalance = () => {
  const { library, account } = useWeb3React();
  const [balance, setBalance] = useState<string | number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    library.eth.getBalance(account).then((_balance: any) => {
      setBalance((_balance / 1e18).toFixed(2));
      setLoading(false);
    });
  }, [setBalance, account, library]);

  return { balance, loading };
};
