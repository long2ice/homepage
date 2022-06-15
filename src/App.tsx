import * as React from "react"
import {
    ChakraProvider,
    Text,
    Link,
    VStack,
    theme, Avatar, Divider, HStack, Center,
} from "@chakra-ui/react"
import avatar from './avatar.jpeg'

export const App = () => (
    <ChakraProvider theme={theme}>
        <Center h='80vh'>
            <VStack spacing={2}>
                <Link href='https://www.long2ice.io'><Avatar size='2xl' name='Avatar' src={avatar}/></Link>
                <Text fontSize='3xl' as='em'>
                    long2ice
                </Text>
                <Text fontSize='lg' color='blackAlpha.600'>
                    Life is hard, code is simple
                </Text>
                <Divider orientation='horizontal'/>
                <HStack fontSize='sm'>
                    <Link href='https://blog.long2ice.io' isExternal>Blog</Link>
                    <Divider orientation='vertical'/>
                    <Link href='https://github.com/long2ice' isExternal>Github</Link>
                    <Divider orientation='vertical'/>
                    <Link href='https://sponsor.long2ice.io' isExternal>Sponsor</Link>
                </HStack>
            </VStack>
        </Center>
    </ChakraProvider>
)
