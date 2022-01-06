import { Flex, Button, useToast } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { ConnectWalletWarning } from "../common";
import { useMintToken } from "../../hooks";
import { useEffect } from "react";

export const MintBox = () => {
  const { active, account } = useWeb3React();
  const toast = useToast();

  const { minting, event, mint } = useMintToken(account || "");

  const handleMintToken = () => {
    mint();
  };

  useEffect(() => {
    console.log(event);
    if (event && event.msg) {
      toast({
        title: event.msg,
        description: event.description || undefined,
        status: event.status,
      });
    }
  }, [event, toast]);

  return (
    <Flex direction="column">
      <Button
        display={{ base: "none", md: "inline-flex" }}
        fontWeight={600}
        variant="solid"
        onClick={handleMintToken}
        disabled={!active || minting}
        isLoading={minting}
        loadingText="Minting token..."
      >
        + Mint your punk
      </Button>

      {!active && <ConnectWalletWarning />}
    </Flex>
  );
};
