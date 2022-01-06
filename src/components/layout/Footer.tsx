import {
  Box,
  Container,
  Stack,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      minH={"60px"}
      py={{ base: 2 }}
      px={{ base: 4 }}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2022</Text>
        <Stack direction={"row"} spacing={6}></Stack>
      </Container>
    </Box>
  );
};
