import { Container, Flex } from "@chakra-ui/react";

import { Hero } from "../landing";
import { MintBox, TokenList } from "../tokens";

export const TokenCollectionScreen = () => {
  return (
    <Container maxW={"7xl"}>
      <Flex direction="column">
        <TokenList title={"Tokens in the collection"} />
      </Flex>
    </Container>
  );
};
