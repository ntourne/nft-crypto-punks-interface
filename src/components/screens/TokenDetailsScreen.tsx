import { useState, useEffect } from "react";

import {
  Container,
  Flex,
  Text,
  Box,
  Heading,
  Stack,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { TokenImage } from "../tokens";
import { TOKENS } from "../../data";
import { IToken } from "../../interfaces";

export const TokenDetailsScreen = () => {
  const [token, setToken] = useState<IToken | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  let { tokenId } = useParams();

  useEffect(() => {
    const _token: any = TOKENS.find(
      (tokenItem: any) => tokenItem.tokenId === Number(tokenId)
    );
    if (_token) setToken(_token);
    setIsLoading(false);
  }, [tokenId]);

  return (
    <Container maxW={"7xl"}>
      {isLoading && <Text>Loading...</Text>}
      {!isLoading && !token && <Text>Token not found</Text>}
      {!isLoading && token && (
        <Flex direction="row" mt={6}>
          <TokenImage image={token?.image} />
          <Stack direction="column" ml={8} spacing={2}>
            <Box>Owned by 0x</Box>
            <Heading>{token.name}</Heading>

            {token.description && (
              <Flex direction="column" pt={4}>
                <Text fontWeight="bold" mb={1}>
                  Description
                </Text>
                {token.description}
              </Flex>
            )}

            {token.attributes && (
              <Flex direction="column" pt={4}>
                <Text fontWeight="bold" mb={1}>
                  Properties
                </Text>
                <SimpleGrid columns={4} spacing={2}>
                  {token.attributes.map((attribute: any, idx: number) => (
                    <TokenAttribute
                      key={idx}
                      name={attribute.trait_type}
                      value={attribute.value}
                    />
                  ))}
                </SimpleGrid>
              </Flex>
            )}
          </Stack>
        </Flex>
      )}
    </Container>
  );
};

const TokenAttribute = (props: any) => {
  const { name, value } = props;
  return (
    <Flex
      direction="column"
      width="auto"
      borderWidth="1px"
      bgColor={useColorModeValue("gray.100", "gray.800")}
      align="center"
      py={1}
      borderRadius={6}
    >
      <Box>{name}</Box>
      <Box fontWeight="bold">{value}</Box>
    </Flex>
  );
};
