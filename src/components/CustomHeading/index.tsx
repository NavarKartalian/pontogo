import { Heading, HeadingProps } from '@chakra-ui/react';

import { ReactNode } from 'react';

interface CustomHeadingProps extends HeadingProps {
  children: ReactNode;
}

export function CustomHeading({ children, ...rest }: CustomHeadingProps) {
  return (
    <Heading
      fontSize={{base: '34px', md: '40px'}}
      fontWeight='bold'
      {...rest}
    >
      {children}
    </Heading>
  );
}