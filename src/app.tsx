import * as React from "react";
import { ChakraProvider, Center, Flex } from "@chakra-ui/react";
import Home from "./home";
import Projects from "./projects";

export const App = () => (
  <ChakraProvider>
    <Flex h="100vh" w="100%" alignItems="center">
      <Home w="30%" />
      <Projects w="70%" />
    </Flex>
  </ChakraProvider>
);
