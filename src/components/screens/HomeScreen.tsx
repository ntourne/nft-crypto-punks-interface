import { Container, Flex } from "@chakra-ui/react";

import { Hero } from "../landing";
import { MintBox, TokenList } from "../tokens";

export const HomeScreen = () => {
  return (
    <Container maxW={"7xl"}>
      <Flex direction="column">
        <Hero rightComponent={<MintBox />} />
        <TokenList title={"Punks minted in the Collection"} />
      </Flex>
    </Container>
  );
};
