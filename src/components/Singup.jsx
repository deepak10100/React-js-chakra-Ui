import React from 'react'
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Avatar,
    FormControl,
  
   
  } from "@chakra-ui/react";
  import { FaUserAlt, FaLock } from "react-icons/fa";
  
  const CFaUserAlt = chakra(FaUserAlt);
  const CFaLock = chakra(FaLock);
export default function Singup() {
  return (
    <>
    <Flex
flexDirection="column"
width="100wh"
height="100vh"
//   backgroundColor="gray.200"
justifyContent="center"
alignItems="center"
>
<Stack
flexDir="column"
mb="2"
justifyContent="center"
alignItems="center"
>
<Avatar  />
<Heading>Welcome</Heading>
<Box minW={{ base: "90%", md: "468px" }}>
  <form>
    <Stack
      spacing={4}
      p="1rem"
    //   backgroundColor="whiteAlpha.900"
      boxShadow="md"
    >
      <FormControl>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<CFaUserAlt color="gray.300" />} />
          <Input type="name" placeholder="Name" />
        </InputGroup>
      </FormControl>
      <FormControl>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<CFaUserAlt color="gray.300" />} />
          <Input type="number" placeholder="Phone Number" />
        </InputGroup>
      </FormControl>
      <FormControl>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<CFaUserAlt color="gray.300" />} />
          <Input type="" placeholder="email address" />
        </InputGroup>
      </FormControl>
      <FormControl>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            children={<CFaLock color="gray.300" />}
          />
          <Input
            type={ "password"}
            placeholder="Password"
          />
        
        </InputGroup>
       
      </FormControl>
      <Button
        
        type="submit"
        // variant="solid"
        colorScheme="purple"
        width="full"
      >
        Singup
      </Button>
    </Stack>
  </form>
</Box>
</Stack>

</Flex>
</>
  )
}
