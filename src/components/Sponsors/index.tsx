import { Flex, Image } from '@chakra-ui/react';


export function Sponsors() {
  return (
    <Flex
      maxW='1220px'
      w='100%'
      px='16px'
      mx='auto'
      flexWrap='wrap'
      justify='space-around'
      mt='30px'
      mb='80px'
    >
      <Image alt='brainny logo' src='/assets/logos/brainny.svg' /> 
      <Image alt='brainny logo' src='/assets/logos/amoPet.svg' />
      <Image alt='brainny logo' src='/assets/logos/dotBus.svg' />
      <Image alt='brainny logo' src='/assets/logos/goStudy.svg' />       
    </Flex>
  );
}