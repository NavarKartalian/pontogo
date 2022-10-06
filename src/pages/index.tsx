import Head from 'next/head';

import { Flex, Box, Text, Image } from '@chakra-ui/react';

import { Header } from '../components/Header';

import { CustomButton } from '../components/CustomButton';
import { CustomHeading } from '../components/CustomHeading';
import { CustomSlider } from '../components/CustomSlider';

import { Sponsors } from '../components/Sponsors';
import { Footer } from '../components/Footer';

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
          justify={{base: 'center', lg: 'space-between'}}
          alignItems='center'
          mx='auto'
          id='inicio'
        >
          <Flex 
            direction='column' 
            alignItems={{base: 'center', lg: 'initial'}}
            textAlign={{ base: 'center', lg: 'initial' }}
          >
            <Text 
              fontSize={{base: 'lg', md: '2xl'}}
              fontWeight='light'
              letterSpacing='3.85px'
              mb='3'
            >
              ESQUECE O PONTO MANUAL
            </Text>

            <CustomHeading
              mb='5'
            >
              Chegou a nova realidade para
              <Text as='span' color='purple.500'> Controle de Pontos</Text>
            </CustomHeading>

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
              flexWrap='wrap'
              w='100%'
              justify={{base: 'center', lg: 'initial'}}
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
          </Flex>

          <Image 
            alt='' //Descrição pode ser confusa para o usuário com leitor de tela
            src='/assets/landingImage.svg'
            display={{ base: 'none', lg: 'inline-block' }}
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
            <CustomHeading 
              mb='10px'
            >
              Encontre o plano perfeito
            </CustomHeading>

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

        <Footer />
      </Flex>
    </>
  );
}
