import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
   
    useDisclosure,
    VStack,
  } from '@chakra-ui/react'
  import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from 'react-router-dom';
function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  return (
    <>
        <Button ref={btnRef} zIndex={'2'} position={"fixed"} top={"4"} left={"4"} h={"10"} w={"10"} padding={"0"} borderRadius={"full"} colorScheme='purple' onClick={onOpen}>
        <BiMenuAltLeft size={"20"} />
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
          <DrawerHeader>VIDEO HUB</DrawerHeader>

          <DrawerBody>
            <VStack align={"flex-start"}>
           <Button colorScheme='purple' variant={'ghost'} onClick={onClose}>
           <Link to={"/"}>Home</Link>
           </Button>
           <Button colorScheme='purple' variant={'ghost'} onClick={onClose}>
           <Link to={"/videos"}>Videos</Link>
           </Button>
           <Button colorScheme='purple' variant={'ghost'} onClick={onClose}>
           <Link to={"/freevideos"}>Free Videos</Link>
           </Button>
           <Button colorScheme='purple' variant={'ghost'} onClick={onClose}>
           <Link to={"/upload"}>Upload</Link>
           </Button>
            </VStack>
          </DrawerBody>

          <DrawerFooter justifyContent={"space-around"}>
            <Button variant='outline' mr={3} onClick={onClose}>
            <Link to={"/login"}>Login</Link>
            </Button>
            <Button colorScheme='purple' onClick={onClose}>
            <Link to={"/signup"}>Signup</Link>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header
