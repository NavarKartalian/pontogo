import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Flex,
  Text,
  Image,
} from '@chakra-ui/react';

import moment from "moment";

import { CustomButton } from '../CustomButton';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTime: () => void;
}

export function CustomModal({ isOpen, onClose, onTime }: CustomModalProps) {
  return (
    <Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay
          bg='rgba(32, 41, 46, 0.2)'
          backdropFilter='blur(4px)'
        />
        <ModalContent maxW={{base: '300px', md: '400px'}} left={{base: '', md: '90px'}}>
          <ModalCloseButton color='gray.900' opacity='0.8' />
          <ModalBody borderRadius='5px' border='1px' borderColor='rgba(32, 41, 46, 0.3)'>
            <Flex direction='column' align='center' color='purple.900'>
              <Text color='gray.900' fontSize='20px' fontWeight='bold' mb='30px' mt='60px'>
                Registrar novo ponto
              </Text>

              <Image alt='Clock icon' src='/assets/clockIcon.svg' />

              <Text
                as='time'
                fontSize='30px'
                fontWeight='bold'
                mb='5px'
              >
                {moment(Date.now()).locale('pt-br').format("HH:mm")}
              </Text>

              <Text
                opacity='0.6'
                mb='20px'
              >
                {moment(Date.now()).locale('pt-br').format("DD/MM/YYYY")}
              </Text>

              <CustomButton
                w='200px'
                bg='purple.900'
                mb='22px'
                _hover={{opacity: '0.8'}}
                _focus={{opacity: '0.8'}}
                onClick={onTime}
              >
                Bater ponto
              </CustomButton>

              <CustomButton
                w='200px'
                border='1px'
                color='purple.900'
                borderColor='purple.900'
                mb='60px'
                _hover={{bg: 'red.500', color: 'white', border: 'none'}}
                _focus={{bg: 'red.500', color: 'white', border: 'none'}}
                onClick={onClose}
              >
                Cancelar
              </CustomButton>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}