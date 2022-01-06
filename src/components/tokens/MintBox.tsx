import { Flex, Button, useToast } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { AddIcon } from "@chakra-ui/icons";
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
      {active && (
        <Button
          display={{ base: "none", md: "inline-flex" }}
          fontWeight={600}
          variant="solid"
          onClick={handleMintToken}
          disabled={!active || minting}
          isLoading={minting}
          colorScheme={"green"}
          loadingText="Minting token..."
          leftIcon={<AddIcon />}
        >
          Mint your punk
        </Button>
      )}
    </Flex>
  );
};
