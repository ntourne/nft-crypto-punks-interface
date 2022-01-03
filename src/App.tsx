import * as React from "react";

import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import {
  HomeScreen,
  ProfileScreen,
  TokenDetailsScreen,
  TokenCollectionScreen,
} from "./components/screens";
import { Layout } from "./components/layout";

const App = () => {
  return (
    <ChakraProvider>
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
    </ChakraProvider>
  );
};

export default App;
