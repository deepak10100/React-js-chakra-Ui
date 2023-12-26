import React,{useEffect,useState} from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Heading,
  } from '@chakra-ui/react'
import Coin from './Coin'

function Home() {
    let arr = [1,2,3,4,5]
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('working')
        
      });
    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <>
        <Button ref={btnRef} m={'4'} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
           <Button as={'a'} href='/'>Home</Button>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {
        arr.map((i)=>(
            <Coin name={'bitcoin'} symbol={"usd"} key={i}/>
        ))
      }
      <Button onClick={()=>setCount(count+1)} >onClick</Button>
     <Heading>{count}</Heading>
    </>
  )
}

export default Home
