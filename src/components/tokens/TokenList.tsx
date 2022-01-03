import { Heading, Flex, SimpleGrid, Container } from "@chakra-ui/react";
import { TokenBox } from ".";

import { TOKENS } from "../../data";

export const TokenList = (params: any) => {
  const { title } = params;
  return (
    <Container maxW={"7xl"}>
      <Flex direction="column">
        <Heading as="h3" fontSize="1.5em" mb={2}>
          {title}
        </Heading>
        <SimpleGrid columns={4} spacing={2}>
          {TOKENS.map((token: any) => (
            <TokenBox key={token.tokenId} token={token} />
          ))}
        </SimpleGrid>
      </Flex>
    </Container>
  );
};
