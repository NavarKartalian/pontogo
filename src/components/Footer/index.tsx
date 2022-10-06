import { Box, Divider, Flex, Image, Link, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Flex
      as='footer'
      w='full'
      direction='column'
      gap='60px'
      mb='60px'
    >
      <Flex
        w='full'
        gap='60px'
        justify='center'
        alignItems='center'
        borderY='1px'
        py='20px'
        borderColor='purple.500'
        flexWrap='wrap'
      >
        <Box textAlign={{ base: 'center', md: 'initial'}}>
          <Text 
            fontWeight='bold' 
            fontSize='20px'
            mb='5px'
          >
            @pontogo
          </Text>

          <Text
            fontWeight='light'
          >
            Se conecta com a gente
          </Text>
        </Box>

        <Flex gap='40px'>
          <Link href='#'>
            <Image alt='instagram logo' src='/assets/logos/instagram.svg' />
          </Link>
          
          <Link href='#'>
            <Image alt='facebook logo' src='/assets/logos/facebook.svg' />
          </Link>
          
          <Link href='#'>
            <Image alt='Linkedin logo' src='/assets/logos/linkedin.svg' />
          </Link>
        </Flex>
      </Flex>

      <Flex justify={{base: 'center', sm: 'space-between'}} textAlign='center' alignItems='center' gap='30px' w='100%'>
        <Divider opacity='0.4' display={{base: 'none', sm: 'initial'}} />
        
        <Text maxW='300px' w='100%' whiteSpace={{sm: 'nowrap'}}>
          PontoGo - Todos direitos reservados
        </Text>

        <Divider opacity='0.4' display={{base: 'none', sm: 'initial'}} />
      </Flex>
    </Flex>
  );
}