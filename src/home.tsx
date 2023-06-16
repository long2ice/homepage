import { Avatar, Divider, HStack, Link, Text, VStack } from "@chakra-ui/react";
import avatar from "./assets/avatar.jpeg";

function Home(props: Record<string, any>) {
  return (
    <VStack spacing={2} {...props}>
      <Link href="https://www.long2ice.io">
        <Avatar size="2xl" name="Avatar" src={avatar} />
      </Link>
      <Text fontSize="4xl" as="em">
        long2ice
      </Text>
      <Text fontSize="lg" color="blackAlpha.600">
        Life is hard, code is simple
        <Divider orientation="horizontal" mt="2" />
      </Text>
      <HStack fontSize="sm">
        <Link href="https://blog.long2ice.io" isExternal>
          Blog
        </Link>
        <Divider orientation="vertical" />
        <Link href="https://github.com/long2ice" isExternal>
          Github
        </Link>
        <Divider orientation="vertical" />
        <Link href="https://sponsor.long2ice.io" isExternal>
          Sponsor
        </Link>
        <Divider orientation="vertical" />
        <Link href="mailto:long2ice@gmail.com" isExternal>
          Contact
        </Link>
      </HStack>
    </VStack>
  );
}

export default Home;
