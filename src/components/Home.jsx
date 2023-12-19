import React from 'react'
import { Card,Image, Stack, CardBody,Heading, Text, } from '@chakra-ui/react'
function Home() {
  return (
    <>
       <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://plus.unsplash.com/premium_photo-1680700221535-a7aa2aa40a7c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1678957949479-b1e876bee3f1?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://plus.unsplash.com/premium_photo-1681426701125-bed484a8c829?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  <Heading size="lg" pt={"10"} borderBottom={"1px solid"} width={"fit-content"} m={"auto"}>Services</Heading>
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  alignItems={"center"}
  m={'7'}
  h={"full"}
  p={"7"}
>

  <Image
  
 
    // filter={"hue-rotate(-130deg)"}
    height={["40","400"]}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      

      <Text py='2' textAlign={"center"} lineHeight={"190%"} letterSpacing={"3px"}>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.Caffè latte is a coffee beverage of Italian origin made with espressoand steamed milk.
        Caffè latte is a coffee beverage of Italian origin made with espressoand steamed milk.
        Caffè latte is a coffee beverage of Italian origin made with espressoand steamed milk.
        Caffè latte is a coffee beverage of Italian origin made with espressoand steamed milk.
      </Text>
    </CardBody>

   
  </Stack>
</Card>
    </>
  )
}

export default Home
