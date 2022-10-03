import Head from 'next/head';
import { Flex, Box, Text, Image } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { CustomButton } from '../components/CustomButton';
import { Sponsors } from '../components/Sponsors';
import { CustomSlider } from '../components/CustomSlider';

export default function Home() {
  return (
    <>
      <Head>
        <title>PontoGo</title>
      </Head>

      <Flex
        w='100%'
        minH='calc(100vh)'
        bg='purple.900'
        bgImage='url("/assets/lpBackground.png")'
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        flexDir='column'
      >
        <Header />

        <Flex 
          w='100%'
          px='16px'
          maxW='1220px'
          justify='space-between'
          alignItems='center'
          mx='auto'
          id='inicio'
        >
          <Box>
            <Text 
              fontSize='2xl'
              fontWeight='light'
              letterSpacing='3.85px'
              mb='3'
            >
              ESQUECE O PONTO MANUAL
            </Text>

            <Text
              fontSize='40px'
              fontWeight='bold'
              mb='5'
            >
              Chegou a nova realidade para
              <Text as='span' color='purple.500'> Controle de Pontos</Text>
            </Text>

            <Text
              fontSize='lg' 
              fontWeight='medium'
              maxW='476px'
              mb='30px'
            >
              Com o PontoGo seus colaboradores poderão bater seus pontos de forma fácil e rápida, 
              possuindo também uma Dashboard intuitiva.
            </Text>

            <Flex
              gap='15px'
            >
              <CustomButton
                bg='purple.500'
                _hover={{bg: 'purple.700', color: 'white'}}
                _focus={{bg: 'purple.700', color: 'white'}}
              >
                Assinar agora
              </CustomButton>

              <CustomButton
                as='a'
                href='#planos'
                bg='transparent'
                border='1px'
                borderColor='white'
                _hover={{bg: 'white', color: 'purple.900'}}
                _focus={{bg: 'white', color: 'purple.900'}}
              >
                Ver Planos
              </CustomButton>
            </Flex>
          </Box>

          <Image 
            alt='Homem usando VR flutua com objetos no espaço' 
            src='/assets/landingImage.svg'
          />
        </Flex>

        <Sponsors />

        <Flex
          direction='column'
          w='100%'
          alignItems='center'
          id='planos'
        >
          <Box
            maxW='640px'
            w='100%'
            textAlign='center'
          >
            <Text 
              fontSize='40px'
              fontWeight='bold'
              mb='10px'
            >
              Encontre o plano perfeito
            </Text>

            <Text 
              fontSize='20px'
              fontWeight='normal'
              opacity='70%'
              mb='70px'
            >
              Escolha o plano que melhor se encaixa na sua empresa e  faça sua assinatura, 
              dentro de 72h iremos liberar seus acessos.
            </Text>
          </Box>

          <CustomSlider />
        </Flex>
      </Flex>
    </>
  );
}
