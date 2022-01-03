import { Flex } from "@chakra-ui/react";
import { Navbar } from "./Navbar";

export const Layout = ({ children }: any) => {
  return (
    <Flex direction="column">
      <Navbar />
      <Flex py={{ base: 2 }} px={{ base: 4 }}>
        {children}
      </Flex>
    </Flex>
  );
};
