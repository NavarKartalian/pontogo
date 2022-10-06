import Head from "next/head";

import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { LoginForm } from "../../components/LoginForm";
import { CustomHeading } from "../../components/CustomHeading";

export default function Login() {
  return (
    <>
      <Head>
        <title>PontoGo | Login</title>
      </Head>

      <Flex
        w='100%'
        minH='calc(100vh)'
      >
        <Flex 
          w='100%' 
          maxW='1152px' 
          mx='auto' 
          justify={{base: 'center', lg: 'space-between'}}
          alignItems='center'
          mt='30px'
          px='16px'
        >
          <Box textAlign='center' color='purple.900' display={{base: 'none', lg: 'initial'}}>
            <Image alt='' src='/assets/loginImage.svg' w='585px' mb='20px' />

            <CustomHeading
              fontSize='40px'
              fontWeight='bold'
            >
              Bem vindo ao PontoGo
            </CustomHeading>

            <Text
              fontSize='25px'
              maxW='470px'
              opacity='0.7'
              mx='auto'
            >
              Aqui você fará toda gestão do seu sistema de pontos.
            </Text>
          </Box>

          <Flex direction='column'>
            <Image alt='PontoGo logo' src="/assets/logos/violetLogo.svg" mb='30px' />

            <CustomHeading color='purple.900'>
              Faça login
            </CustomHeading>

            <LoginForm />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}