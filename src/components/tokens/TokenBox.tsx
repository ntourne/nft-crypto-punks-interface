import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { TokenImage } from ".";
import { Link } from "react-router-dom";
import { IToken } from "../../interfaces";

export const TokenBox = ({ token }: { token: IToken }) => {
  const { tokenId, name, image } = token;
  return (
    <Center py={2}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Link to={`token/${tokenId}`}>
          <TokenImage image={image} />
        </Link>
        <Stack pt={6} align={"left"}>
          <Link to={`token/${tokenId}`}>
            <Heading fontSize={"lg"} fontFamily={"body"} fontWeight={500}>
              {name}
            </Heading>
          </Link>
          <Box>Owned by 0x</Box>
          {/*
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              $57
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              $199
            </Text>
          </Stack>
          */}
        </Stack>
      </Box>
    </Center>
  );
};
