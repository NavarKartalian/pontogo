import { Box, Divider, Flex, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";

import moment from "moment";

interface CustomTableProps {
  registeredTimes: {
    id: string;
    created_at: string;
    user: {
      name: string;
      id: string;
    }
  }[];
}

export function CustomTable({ registeredTimes }: CustomTableProps) {
  return (
    <TableContainer mt='20px' px='30px' w='100%'>
      <Table 
        variant="unstyled" 
        color='gray.900'
        style={{borderCollapse:"separate", borderSpacing:"0 1em"}}
      >
        <Thead>
          <Tr>
            <Th fontSize='22px' p='0' w='312px' textTransform='none'>
              Colaborador
            </Th>

            <Th fontSize='22px' w='258px' textTransform='none'>
              Data
            </Th>
            
            <Th fontSize='22px' textTransform='none'>
              Hora
            </Th>
          </Tr>
        </Thead>

        <Tbody bg='white' fontSize='22px'>
          {registeredTimes.map((time) => (
            <Tr key={time.id}>
              <Td 
                borderY='1px' 
                borderLeft='1px' 
                borderLeftRadius='5px'
                borderColor='rgba(32, 41, 46, 0.2)'
                pl='15px'
              >
                <Flex alignItems='center'>
                  <Divider 
                    orientation="vertical" 
                    w='5px' 
                    height='45px' 
                    bg='purple.500' 
                    borderRadius='30px' 
                    opacity='1' 
                    mr='40px'
                  />

                  <Box>
                    <Text fontWeight='bold' mb='2px'>{time.user.name}</Text>
                    <Text fontSize='16px' opacity='0.5'>{`00${time.user.id}`}</Text>
                  </Box>
                </Flex>
              </Td>

              <Td 
                opacity='0.6' 
                borderY='1px' 
                borderColor='rgba(32, 41, 46, 0.3)'
              >
                {moment(time.created_at).locale('pt-br').format("DD/MM/YYYY")}
              </Td>
              
              <Td 
                opacity='0.6' 
                borderY='1px' 
                borderRight='1px' 
                borderRightRadius='5px'
                borderColor='rgba(32, 41, 46, 0.3)'
              >
                {moment(time.created_at).locale('pt-br').format('HH:mm')}h
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}