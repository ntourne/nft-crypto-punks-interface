import { useMemo } from "react";

export const useTruncatedAddress = (account: string | null | undefined) => {
  const truncated = useMemo(
    () => `${account?.substr(0, 6)}...${account?.substr(-4)}`,
    [account]
  );

  return truncated;
};
