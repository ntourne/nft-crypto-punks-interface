import {
  Heading,
  Flex,
  SimpleGrid,
  Container,
  Text,
  Stack,
  Skeleton,
} from "@chakra-ui/react";
import { TokenBox } from ".";

import { useWeb3React } from "@web3-react/core";
import { useTokens } from "../../hooks";
import { ConnectWalletWarning } from "../common";

export const TokenList = (params: any) => {
  const { title } = params;

  const { loading, tokens, totalSupply } = useTokens();
  const { active } = useWeb3React();

  const tokenList = (
    <>
      <Text>There are {totalSupply} tokens minted in this collection</Text>

      <SimpleGrid columns={[1, 2, 2, 3]} spacing={2}>
        {tokens.map((token: any) => (
          <TokenBox key={token.tokenId} token={token} />
        ))}
      </SimpleGrid>
    </>
  );

  const tokenLoadingList = (
    <SimpleGrid columns={[1, 2, 2, 3]} spacing={2}>
      {[1, 2, 3, 4, 5, 6].map((_, idx) => (
        <Skeleton maxW={"330px"} key={idx} height="200px" />
      ))}
    </SimpleGrid>
  );

  return (
    <Container maxW={"7xl"}>
      <Flex direction="column">
        <Heading as="h3" fontSize="1.5em" mb={2}>
          {title}
        </Heading>
        {active ? (
          <>
            {loading && <Text>Loading tokens...</Text>}
            {!loading && (
              <Flex direction="column">
                {tokens && tokens.length ? tokenList : tokenLoadingList}
              </Flex>
            )}
          </>
        ) : (
          <ConnectWalletWarning />
        )}
      </Flex>
    </Container>
  );
};
