import React from 'react'
import {FiUserPlus} from "react-icons/fi"
import {BsThreeDots} from "react-icons/bs"
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'

const Topsection = ({user}) => {
  return (
    <Flex  gap="50px" justify="center" width="70%" alignItems={"center"} margin="auto" mt="25px">
    <Box border={"3px solid red"} p="5px" borderRadius={"50%"}>
    <Image draggable="false" h={"150px"} borderRadius="50%" src="data:image/jpeg;base64,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" alt="profile"/>
    </Box>
    <Box>
    <Flex justify={"center"} mt="10px" gap="10px" alignItems="center">
        <Text cursor="pointer">{user.name}</Text>
        <Image h="25px" w="25px" src="https://media.istockphoto.com/id/1396933001/vector/vector-blue-verified-badge.jpg?s=612x612&w=0&k=20&c=aBJ2JAzbOfQpv2OCSr0k8kYe0XHutOGBAJuVjvWvPrQ=" alt="blue-tick"/>
        <Button h="35px">Follow</Button>
        <Button h="35px">Message</Button>
        <Button h="35px"><FiUserPlus/></Button>
        <BsThreeDots/>
    </Flex>
    <Flex gap="20px" mt="20px">
        <Text>1,502 posts</Text>
        <Text>232M followers</Text>
        <Text>262 following</Text>     
    </Flex>
    <Flex direction="column" mt="10px" textAlign="left">
        <Text as="b" color="#264854" >Virat Kohli</Text>
        <Text>Carpediem!</Text>
        <Text cursor="pointer" color={"#5b9eca"}>one8.com</Text>
    </Flex>
    <Flex gap="3px" mt={"10px"}>
        <Text>Followed by</Text>
        <Text>abcde,</Text>
        <Text>abcde,</Text>
        <Text>abcde</Text>
        <Text>+ xyz more</Text>
    </Flex>
    </Box>
</Flex>
  )
}

export default Topsection