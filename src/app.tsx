import * as React from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Home from "./home";
import Projects from "./projects";

export const App = () => (
  <ChakraProvider>
    <Flex direction="column" alignItems="center" m="2%">
      <Home />
      <Projects mt="1%" />
    </Flex>
  </ChakraProvider>
);
