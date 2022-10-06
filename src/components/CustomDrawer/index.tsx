import { useRef } from 'react';

import { 
  Button,
  Drawer, 
  DrawerBody, 
  DrawerCloseButton, 
  DrawerContent, 
  DrawerOverlay, 
  useDisclosure 
} from '@chakra-ui/react';

import { GiHamburgerMenu } from 'react-icons/gi';

import { Sidebar } from '../Sidebar';

export function CustomDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<any>();

  return (
    <>
      <Button 
        ref={btnRef}
        colorScheme=''
        onClick={onOpen}
        display={{base: 'initial', md: 'none'}}
        color='purple.900'
      >
        <GiHamburgerMenu size={28} />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='full'
      >
        <DrawerOverlay 
          bg='rgba(32, 41, 46, 0.2)'
          backdropFilter='blur(8px)'
        />
        <DrawerContent bg='transparent'>
          <DrawerCloseButton color='gray.900' right='28px' top='40px' size='lg' />

          <DrawerBody p='0'>
            <Sidebar isDrawer />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}