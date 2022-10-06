import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
    isCurrent?: boolean;
    number: number;
    paginate: (pageNumber: number) => void;
}

export function PaginationItem({isCurrent, number}: PaginationItemProps) {
  return (
      <>
        { isCurrent ? (
          <Button 
            as='div'
            fontSize='14px' 
            width='30px'
            color='gray.900'
            borderRadius='2px'
            border='1px'
            size='sm'
            borderColor='gray.900'
          >
            {number}
          </Button>
          ) : (

          <Button 
            as='div'
            fontSize='14px' 
            width='30px'
            color='gray.900'
            borderRadius='2px'
            opacity={0.5}
            border='1px'
            size='sm'
            borderColor='gray.900'
          >
            {number}
          </Button>
        )}
      </>
  );
}