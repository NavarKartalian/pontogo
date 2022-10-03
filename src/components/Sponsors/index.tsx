import { Flex, Image } from '@chakra-ui/react';


export function Sponsors() {
  return (
    <Flex
      maxW='1220px'
      w='100%'
      px='16px'
      mx='auto'
      justify='space-around'
      mt='30px'
      mb='80px'
    >
      <Image alt='brainny logo' src='/assets/brainny.svg' /> 
      <Image alt='brainny logo' src='/assets/amoPet.svg' />
      <Image alt='brainny logo' src='/assets/dotBus.svg' />
      <Image alt='brainny logo' src='/assets/goStudy.svg' />       
    </Flex>
  );
}