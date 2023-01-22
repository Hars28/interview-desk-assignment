import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {GrHomeRounded} from "react-icons/gr"
const Sidebar = () => {
  return (
    <Box left={5} top={10} position="fixed" border={"2px solid"} height="100vh" width={["50px"]}>
    <Flex direction="column" gap={"40px"} justify="space-between">
        <Box w="100%" textAlign="left">Instagram</Box>
        <VStack>
            <Flex w="100%" gap="10px" justify="flex-start" alignItems="center" border={"2px solid"}>
                <GrHomeRounded fontSize="25px"/>
                <Text>Home</Text>
            </Flex>
            <Flex w="100%" gap="10px" justify="flex-start" alignItems="center" border={"2px solid"}>
                <GrHomeRounded fontSize="25px"/>
                <Text>Home</Text>
            </Flex>
            <Flex w="100%" gap="10px" justify="flex-start" alignItems="center" border={"2px solid"}>
                <GrHomeRounded fontSize="25px"/>
                <Text>Home</Text>
            </Flex>
            <Flex w="100%" gap="10px" justify="flex-start" alignItems="center" border={"2px solid"}>
                <GrHomeRounded fontSize="25px"/>
                <Text>Home</Text>
            </Flex>
            <Flex w="100%" gap="10px" justify="flex-start" alignItems="center" border={"2px solid"}>
                <GrHomeRounded fontSize="25px"/>
                <Text>Home</Text>
            </Flex>
            <Flex w="100%" gap="10px" justify="flex-start" alignItems="center" border={"2px solid"}>
                <GrHomeRounded fontSize="25px"/>
                <Text>Home</Text>
            </Flex>
            <Flex w="100%" gap="10px" justify="flex-start" alignItems="center" border={"2px solid"}>
                <GrHomeRounded fontSize="25px"/>
                <Text>Home</Text>
            </Flex>
            <Flex w="100%" gap="10px" justify="flex-start" alignItems="center" border={"2px solid"}>
                <GrHomeRounded fontSize="25px"/>
                <Text>Home</Text>
            </Flex>
        </VStack>
    </Flex>
    </Box>
  )
}

export default Sidebar