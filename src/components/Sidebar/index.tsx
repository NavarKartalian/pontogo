import { useRouter } from 'next/router'

import { destroyCookie } from 'nookies';

import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";

import { RiDashboardLine } from 'react-icons/ri';

interface SidebarProps {
  isDrawer: boolean;
}

export function Sidebar({ isDrawer }: SidebarProps) {
   const route = useRouter();

  return (
    <Flex
      as='aside'
      flexDir='column'
      maxW={!isDrawer ? '180px' : ''}
      w='100%'
      minH='calc(100vh)'
      bg='white'
      justify={isDrawer ? '' : 'space-between'}
      boxShadow='2xl'
      zIndex='9999'
      display={isDrawer ? {base: 'flex'} : { base: 'none', md: 'flex' }}
    >
      <Box>
        <Image 
          alt='PontoGo logo' 
          src='assets/logos/violetLogo.svg' 
          mt='40px' 
          px='24px' 
          mb='34px'
          w={isDrawer ? '220px' : ''}
        />

        <Flex
          w='100%'
          h='104px'
          color='purple.900'
          alignItems='center'
          gap='14px'
          fontSize='14px'
          borderY='1px'
          borderColor='rgba(0, 0, 0, 0.08)'
          _before={{
            content: `""`,
            height: '100%',
            width: '4px',
            backgroundColor: 'purple.900',
            position: 'relative',
            left: '0',
            borderRightRadius: '3px'
          }} 
        >
          { route.asPath === '/dashboard' && 
            <>
              <RiDashboardLine size='20px' /> Dashboard
            </> }

          { route.asPath === '/meus-registros' && 
            <>
              <Image src="/assets/notepadIcon.svg" alt="Notepad icon" /> Meus registros
            </> }
        </Flex>
      </Box>

      <Flex mb='22px' mt={isDrawer ? '40px' : ''}>
        <Button
          colorScheme=''
          fontWeight='normal'
          fontSize='16px'
          gap='12px'
           color='black'
          _hover={{ bg: 'rgba(0, 0, 0, 0.4)' }}
          onClick={() => {
            destroyCookie(null, 'nextAuth.token');
            route.reload();
          }}
        >
          <Icon as={() => <Image src="/assets/exitIcon.svg" alt="Exit icon" />} />
          <Text>Sair</Text>
        </Button>
      </Flex>
    </Flex>
  );
}