import { useEffect, useCallback } from "react";
import { Flex, Button, Text } from "@chakra-ui/react";
import { connector } from "../../config/web3";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { useEthBalance } from "../../hooks";
import { truncateAddress } from "../../utils/formatter";
import { CloseIcon } from "@chakra-ui/icons";

export const WalletData = () => {
  const { activate, account, active, deactivate, error } = useWeb3React();

  const isUnsupportedChain = error instanceof UnsupportedChainIdError;

  const connect = useCallback(() => {
    activate(connector);
    localStorage.setItem("previouslyConnected", "true");
  }, [activate]);

  useEffect(() => {
    if (localStorage.getItem("previouslyConnected") === "true") connect();
  }, [connect]);

  const handleDisconnect = () => {
    deactivate();
    localStorage.removeItem("previouslyConnected");
  };

  return (
    <Flex alignItems={"center"}>
      {active ? (
        <WalletBalance account={account} onDisconnect={handleDisconnect} />
      ) : (
        <Button
          variant={"solid"}
          colorScheme={"green"}
          onClick={connect}
          disabled={isUnsupportedChain}
        >
          {isUnsupportedChain ? "Chain no supported" : "Connect Wallet"}
        </Button>
      )}
    </Flex>
  );
};

const WalletBalance = (props: any) => {
  const { account, onDisconnect } = props;
  const { balance, loading } = useEthBalance();

  return (
    <Flex direction="row">
      <Button borderRightRadius={0} pr={1}>
        {truncateAddress(account)}{" "}
        <Text
          as="span"
          fontWeight="bold"
          bgColor="gray.400"
          borderRadius="6px"
          ml={2}
          py={1}
          px={2}
          color="white"
        >
          {loading ? "..." : <Text>~{balance} Ξ</Text>}
        </Text>
      </Button>
      <Button onClick={onDisconnect} borderLeftRadius={0}>
        <CloseIcon />
      </Button>
    </Flex>
  );
};
