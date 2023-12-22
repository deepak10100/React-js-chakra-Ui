import { Heading,VStack,Box,Center, StackDivider, Input } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from "react-icons/ai";
function Upload() {
  return (
    <>
    

<Center  h='100vh'>
<VStack>
<AiOutlineCloudUpload size={'50%'} />
<Input type='file'/>
</VStack>
</Center>
     
    </>
  )
}

export default Upload
