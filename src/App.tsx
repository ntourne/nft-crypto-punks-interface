import * as React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  HomeScreen,
  ProfileScreen,
  TokenDetailsScreen,
  TokenCollectionScreen,
} from "./components/screens";
import { Layout } from "./components/layout";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "./config/web3";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/collection" element={<TokenCollectionScreen />} />
                <Route path="token">
                  <Route path=":tokenId" element={<TokenDetailsScreen />} />
                </Route>
                <Route path="/token" element={<HomeScreen />} />
                <Route path="profile" element={<ProfileScreen />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </QueryClientProvider>
      </ChakraProvider>
    </Web3ReactProvider>
  );
};

export default App;
