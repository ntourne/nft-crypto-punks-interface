import { Flex, Button } from "@chakra-ui/react";
import { TokenBox } from ".";

export const MintBox = () => {
  return (
    <Flex direction="column">
      <Button
        display={{ base: "none", md: "inline-flex" }}
        fontWeight={600}
        variant="solid"
      >
        Mint your punk
      </Button>
    </Flex>
  );
};
