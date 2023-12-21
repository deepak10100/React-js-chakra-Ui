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
  Input,
  VStack,

} from '@chakra-ui/react'
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from 'react-router-dom';
function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <>
       <Button ref={btnRef} colorScheme='purple' onClick={onOpen} position={"fixed"}
    top={'4'}
    left={'4'} padding={'0'} borderRadius={'full'} >
        <AiOutlineMenuUnfold/>
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
          <DrawerHeader>VIDEOS HUB</DrawerHeader>

          <DrawerBody>
            <VStack alignItems={'flex-start'}>
            <Button colorScheme='purple' onClick={onClose} variant={'outline'} >
              <Link to={'/'}>HOME</Link>
            </Button>
            <Button colorScheme='purple' onClick={onClose} variant={'outline'}>
              <Link to={'/videos'}>VIDEOS</Link>
            </Button>
            <Button colorScheme='purple' onClick={onClose} variant={'outline'}>
              <Link to={'/freevideos'}>FREE VIDEOS</Link>
            </Button>
            <Button colorScheme='purple' onClick={onClose} variant={'outline'}>
              <Link to={'/uploads'}>UPLOADS</Link>
            </Button>
            </VStack>
          </DrawerBody>

          <DrawerFooter justifyContent={'space-between'} >
            <Button variant='outline' mr={3} onClick={onClose}>
              Login
            </Button>
            <Button colorScheme='purple' onClick={onClose}>Sign Up</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header
