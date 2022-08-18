import * as React from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Home from "./home";
import Projects from "./projects";

export const App = () => (
  <ChakraProvider>
    <Flex direction="column" minH="100vh" alignItems="center" m="2%">
      <Home />
      <Projects m="2%" />
    </Flex>
  </ChakraProvider>
);
