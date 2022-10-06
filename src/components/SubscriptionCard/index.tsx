import { memo } from 'react';

import { Box, Text, Flex } from '@chakra-ui/react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

import { CustomButton } from '../CustomButton';

interface SubscriptionCardProps {
  data: {
    id: number;
    type: string;
    price: string;
    collaborators: string;
    registerArea: boolean;
    dashboard: boolean;
    exclusiveSupport: boolean;
    corporateEmail: boolean;
  }[];
  dataIndex: number;
  isCenterSlide: boolean;
}

function SubscriptionCard({ data, dataIndex, isCenterSlide }: SubscriptionCardProps) {
  const isCenter = isCenterSlide;
  const plan = data[dataIndex];

  return (
    <Box
      w='100%'
      maxW='333px'
      py='40px'
      px='38px'
      mx='30px'
      border='1px'
      bg={isCenter ? 'rgba(255, 255, 255, 0.08)' : 'transparent'}
      backdropFilter='auto'
      backdropBlur='2.5px'
      borderColor='purple.500'
      borderRadius='10px'
      style={isCenter ? { opacity: '1' } : { opacity: '0.5' }}
    >
      <Box
        w='100%'
        textAlign='center'
      >
        <Text
          fontSize='20px'
          mb='4px'
        >
          Plano {plan.type}
        </Text>

        <Text
          fontWeight='bold'
          fontSize='50px'
        >
          {plan.price}
        </Text>

        <Text
          fontWeight='light'
          color='purple.500'
          mb='20px'
        >
          {plan.type === 'Platina' ? plan.collaborators : `Uso de ${plan.collaborators}`}
        </Text>

        <Flex 
          alignItems='center' 
          gap='12px' 
          fontWeight='light' 
          mb='15px'
        >
          <AiOutlineCheck />  Área de meus registros
        </Flex>

        <Flex 
          alignItems='center' 
          gap='12px' 
          fontWeight='light' 
          mb='15px'
        >
          <AiOutlineCheck />  Dashboard
        </Flex>

        <Flex 
          alignItems='center' 
          gap='12px' 
          fontWeight='light' 
          mb='15px'
        >
          <AiOutlineCheck />  
          {plan.type === 'Platina' ? plan.collaborators : `Acesso de ${plan.collaborators}`}
        </Flex>

        <Flex 
          alignItems='center' 
          gap='12px' 
          fontWeight='light' 
          mb='15px'
          opacity={plan.exclusiveSupport ? '1' : '0.3'}
        >
          { plan.exclusiveSupport ? <AiOutlineCheck /> : <AiOutlineClose /> }  
          Suporte exclusivo
        </Flex>

        <Flex 
          alignItems='center' 
          gap='12px' 
          fontWeight='light' 
          mb='15px'
          opacity={plan.corporateEmail ? '1' : '0.3'}
        >
          { plan.corporateEmail ? <AiOutlineCheck /> : <AiOutlineClose /> }  
          Email corporativo
        </Flex>

        {isCenter && (
          <CustomButton
            bg='purple.500'
            mt='15px'
            _hover={{bg: 'purple.700', color: 'white'}}
            _focus={{bg: 'purple.700', color: 'white'}}
          >
            Assinar Agora
          </CustomButton>
        )}
      </Box>
    </Box>
  );
}

export const SubscriptionCardMemo = memo(SubscriptionCard);