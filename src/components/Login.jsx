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
  FormHelperText,
 
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import {Link} from 'react-router-dom';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
// import { Link } from 'react-router-dom'

export default function Login() {
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
        <Heading>Welcome Back</Heading>
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
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="email" placeholder="email address" />
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
                <FormHelperText textAlign="right">
                  <Link to={"/forgetpassword"}>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                
                type="submit"
                // variant="solid"
                colorScheme="purple"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link to={'/signup'} color="purple">
          Sign Up
        </Link>
      </Box>
    </Flex>
        </>
    )
}
