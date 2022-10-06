import { ButtonProps, Button } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface CustomButtonProps extends ButtonProps {
  children: ReactNode;
  href?: string;
}

export function CustomButton({ children, href, ...rest }: CustomButtonProps) {
  return (
    <Button 
      h='50px'
      w='160px'
      borderRadius='5px'
      fontWeight='normal'
      href={href}
      colorScheme='none'
      {...rest}
    >
      {children}
    </Button>
  );
}