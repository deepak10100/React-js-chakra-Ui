import logo from './logo.svg';
import './App.css';
import { Button, Input,Image, HStack, AbsoluteCenter, Container } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
function App() {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  }
  return (
    <>
       <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as='span' color='gray.600' fontSize='sm'>
            / wk
          </Box>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
    <Center bg='tomato' h='100px' color='white'>
  This is the Center
</Center>
<HStack>
  <Center w='40px' h='40px' backgroundColor='tomato' >Phone</Center>
  <Center w='40px' h='40px' backgroundColor='tomato'>
    <Box as='span' fontWeight='bold'>
      1
    </Box>
  </Center>
</HStack>
<HStack p={7}>
  <Circle bg={'tomato'} size={'40px'}>
    1
  </Circle>
<Square bg={'tan'} size={'40px'}>
  2
</Square>
</HStack>

<Box h='100px'>
  <AbsoluteCenter bg='tomato' p='4' color='white' axis='both'>
    Phone
  </AbsoluteCenter>
</Box>

<Container>
There are many benefits to a joint design and development system. Not only does it bring benefits to the design team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent look and feel, not just in our design specs, but in production
</Container>
    </>
  );
}

export default App;
