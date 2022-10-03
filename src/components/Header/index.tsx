import NextLink from 'next/link';
import { Flex, Image, Link } from '@chakra-ui/react';
import { CustomButton } from '../CustomButton';

export function Header() {
  return (
    <Flex
      as='header'
      justify='space-between'
      alignItems='center'
      py='45px'
      px='16px'
      maxW='1220px'
      w='100%'
      mx='auto'
    >
      <Image 
        alt='PontoGo logo' 
        src='/assets/whiteLogo.svg' 
        w='164px'
      />

      <Flex
        as='nav'
        w='100%'
        maxW='345px'
        justify='space-between'
        alignItems='center'
      >
        <Link href='#inicio'>Início</Link>

        <Link href='#planos'>Planos</Link>

        <NextLink href='/login' passHref>
          <CustomButton
            as='a'
            bg='white'
            color='purple.900'
            _hover={{bg: 'purple.500', color: 'white'}}
            _focus={{bg: 'purple.500', color: 'white'}}
          >
            Fazer Login
          </CustomButton>
        </NextLink>
      </Flex>
    </Flex>
  );
}