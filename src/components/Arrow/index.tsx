import { Button, Flex } from "@chakra-ui/react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

interface ArrowProps {
  isLeft: boolean;
  onClick: () => void;
}

export function Arrow({ isLeft, onClick }: ArrowProps) {

  return (
    <Flex position='absolute' zIndex='99' px={{base: '2px', md: '16px'}} right={isLeft ? '' : '2px'}>
      <Button 
          bg='transparent'
         _hover={{color: 'purple.500'}} 
         onClick={onClick}
        >
        {isLeft ? <RiArrowLeftLine size={28} /> : <RiArrowRightLine size={28} />}
      </Button>
    </Flex>
  );
}