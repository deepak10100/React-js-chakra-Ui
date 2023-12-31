import { Heading, Stack, Card,Image, CardBody,Text,CardFooter,Button, Center } from '@chakra-ui/react'
import React from 'react'
// import img1 from '../assets/Screenshot (1).png'
import img2 from '../assets/Screenshot 2023-09-30 152817.png'
import img3 from '../assets/Screenshot 2023-11-04 104045.png'

function Home() {
  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={'https://images.unsplash.com/photo-1682686578601-e7851641d52c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<Heading textAlign={'center'} >Service</Heading>
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline' 
  m={7}
  p={10}
  textAlign={'center'}
  align={'center'}
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '500px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody  >
      

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>
  </Stack>
</Card>
    </>
  )
}

export default Home
