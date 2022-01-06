import { Flex } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children }: any) => {
  return (
    <Flex direction="column">
      <Navbar />
      <Flex py={{ base: 2 }} px={{ base: 4 }} minH={"95vh"}>
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};
