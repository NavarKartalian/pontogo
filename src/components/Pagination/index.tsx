import { Box, Button, Stack } from '@chakra-ui/react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { PaginationItem } from './PaginationItem';

interface PaginationProps {
  timesPerPage: number;
  totalTimes: number;
  curPage: number;
  paginate: (pageNumber: number) => void;
}

const siblingsCount = 1;

function generatePagesArray( from: number, to: number ) {
    return [...new Array(to - from)].map((_, index) => {
        return from + index + 1;
    }).filter(page => page > 0)
}

export function Pagination({ timesPerPage, totalTimes, paginate, curPage }: PaginationProps) {
  const lastPage = Math.ceil(totalTimes / timesPerPage);
    
  const previousPages = curPage > 1 ? generatePagesArray(curPage - 1 - siblingsCount, curPage - 1) : [];

  const nextPages = curPage < lastPage ? generatePagesArray(curPage, Math.min(curPage + siblingsCount, lastPage)) : [];

  function handlePagination(curPage: number, position: "left" | "right") {
    if(curPage === 1 && position === "left") return;
    if(curPage === lastPage && position === "right") return;

    if(position === 'left') {
      paginate(curPage - 1);
    } else if(position === 'right') {
      paginate(curPage + 1);
    }
  }

  return (
    <>
       <Stack
          px='30px'
          mt='20px'
        >
          <Stack
            spacing='2'
            direction='row'
          >
            <Button 
            fontSize='14px' 
            width='30px'
            color='gray.900'
            borderRadius='2px'
            border='1px'
            size='sm'
            _hover={{bg: 'purple.500', color: 'white', border: 'none'}}
            _focus={{bg: 'purple.500', color: 'white', border: 'none'}}
            borderColor='gray.900'
            onClick={() => handlePagination(curPage, "left")}
          >
            <Box><AiOutlineLeft size={14} /></Box>
          </Button>
            {curPage > (1 + siblingsCount) && (
              <>
                <PaginationItem paginate={paginate} number={1} />
              </>
            )}

            {previousPages.length > 0 && previousPages.map(page => {
              return <PaginationItem paginate={paginate} key={page} number={page} />
            })}

            <PaginationItem paginate={paginate} number={curPage} isCurrent/>

            {nextPages.length > 0 && nextPages.map(page => {
              return <PaginationItem paginate={paginate} key={page} number={page} />
            })}

            {(curPage + siblingsCount) < lastPage && (
              <>

                <PaginationItem paginate={paginate} number={lastPage} />
              </>
            )}
          <Button 
            fontSize='14px' 
            width='30px'
            color='gray.900'
            borderRadius='2px'
            border='1px'
            size='sm'
            borderColor='gray.900'
            _hover={{bg: 'purple.500', color: 'white', border: 'none'}}
            _focus={{bg: 'purple.500', color: 'white', border: 'none'}}
            onClick={() => handlePagination(curPage, "right")}
          >
            <Box><AiOutlineRight size={14} /></Box>
          </Button>
          </Stack>
      </Stack>
    </>
  );
}