import { useEffect, useCallback } from "react";
import {
  Flex,
  Button,
  Tag,
  TagLabel,
  Badge,
  TagCloseButton,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { connector } from "../../config/web3";
import { Link } from "react-router-dom";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { useTruncatedAddress, useEthBalance } from "../../hooks";

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
  const truncatedAddress = useTruncatedAddress(account);
  const { balance, loading } = useEthBalance();

  const _button = (
    <Tag colorScheme="green">
      <TagLabel>
        <Link to={`/punks?address=${account}`}>{truncatedAddress}</Link>
      </TagLabel>
      <Badge
        d={{
          base: "none",
          md: "block",
        }}
        variant="solid"
        ml={1}
      >
        {loading ? "-" : <Text>~{balance} Ξ</Text>}
      </Badge>
      <TagCloseButton onClick={onDisconnect} />
    </Tag>
  );

  return (
    <Flex direction="row">
      <Menu>
        <MenuButton as={Button} variant={"link"} cursor={"pointer"} minW={0}>
          Account
        </MenuButton>
        <MenuList>
          <MenuItem>{truncatedAddress}</MenuItem>
          <MenuDivider />
          <MenuItem onClick={onDisconnect}>Disconnect</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
