import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, HStack, Heading, Input, Stack, VStack } from '@chakra-ui/react'
import { AiOutlineSend , AiFillInstagram, AiOutlineWhatsApp, AiFillYoutube} from "react-icons/ai";
function Footer() {
  return (
    <>
    <Box bgColor={"black"} minH={"40"} p={"16"} color={"white"}>
        <Stack direction={['column','row']}>
        <VStack alignItems={"stretch"} w={"full"} p={"7"}>
            <Heading size={"md"} textTransform={"uppercase"}>
                Subscribe to get Updates
            </Heading>
            <HStack>
                <Input placeholder='Enter Email Here .....' type='text'/>
                <Button padding={"0"} colorScheme='purple'> <AiOutlineSend/></Button>
            </HStack>
        </VStack>

        <VStack w={"full"}  p={'7'}>
            <Heading size={"md"} textTransform={"uppercase"}>
             SOCIALS MEDIA LINKS
            </Heading>
       
          <Button variant={"link"} colorScheme='white' padding={"0"} fontSize={"28px"}>
            <Link to={"https://www.instagram.com"}><AiFillInstagram/></Link>
        </Button>
          <Button variant={"link"} colorScheme='white' padding={"0"} fontSize={"28px"}>
            <Link to={"https://www.instagram.com"}><AiOutlineWhatsApp/></Link>
        </Button>
          <Button variant={"link"} colorScheme='white'  padding={"0"} fontSize={"28px"}>
            <Link to={"https://www.instagram.com"}><AiFillYoutube/></Link>
        </Button>
          
        </VStack>
        </Stack>
    </Box>
    </>
  )
}

export default Footer
