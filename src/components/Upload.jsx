import React from 'react'
import { Button, Container, HStack, Input, Stack, VStack } from '@chakra-ui/react'
import { AiOutlineCloudUpload} from "react-icons/ai";
function Upload() {
  return (
    <>
     <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
        <VStack color={"purple.500"} h={"100vh"} justifyContent={"center"}>
        <AiOutlineCloudUpload size={"10vmax"}/>
        <form action="">
            <HStack>
                <Input type={'file'} ></Input>
                <Button colorScheme='purple' type='submit' >Upload</Button>
            </HStack>
        </form>
        </VStack>
     </Container>
    </>
  )
}

export default Upload
