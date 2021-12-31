import * as React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <div>Hello world</div>
    </ChakraProvider>
  );
};

export default App;
