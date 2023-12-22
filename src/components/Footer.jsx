import React from 'react'
import {  Stack, Box, Button, Heading, border, VStack } from '@chakra-ui/react'
function Footer() {
  return (
    <>
  <Stack direction={['column', 'row']} justifyContent={'space-around'} padding={10} spacing='24px'>
  <Box>
    <Heading>Social Links</Heading>
   <VStack>
   <Button variant={'outline'} >Instagram</Button>
   <Button variant={'outline'} >Instagram</Button>
   <Button variant={'outline'} >Instagram</Button>
   </VStack>
  </Box>
  <Box>
  <Heading>Videos HUb</Heading>
  </Box>
  <Box>
  <Heading>Use full links</Heading>
  <VStack>
   <Button variant={'outline'} >Instagram</Button>
   <Button variant={'outline'} >Instagram</Button>
   <Button variant={'outline'} >Instagram</Button>
   </VStack>
  </Box>
</Stack>
    </>
  )
}

export default Footer
