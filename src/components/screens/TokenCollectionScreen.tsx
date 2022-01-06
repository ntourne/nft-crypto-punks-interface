import { Container, Flex } from "@chakra-ui/react";

import { TokenList } from "../tokens";

export const TokenCollectionScreen = () => {
  return (
    <Container maxW={"7xl"} pt={4}>
      <Flex direction="column">
        <TokenList title={"Tokens in the collection"} />
      </Flex>
    </Container>
  );
};
