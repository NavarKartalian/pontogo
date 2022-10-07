import { useState } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";

import { Box, Flex, useDisclosure } from "@chakra-ui/react";

import nookies, { parseCookies } from 'nookies';

import { client } from "../../lib/apollo";
import { gql } from "@apollo/client";

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

import { Sidebar } from "../../components/Sidebar";
import { CustomTable } from "../../components/CustomTable";
import { CustomButton } from "../../components/CustomButton";
import { CustomModal } from "../../components/CustomModal";
import { Pagination } from "../../components/Pagination";
import { CustomDrawer } from "../../components/CustomDrawer";
import { useCreateRegisteredTimeMutation } from "../../graphql/generated";

interface ResgisteredTimes {
  id: string;
  created_at: string;
  user: {
    name: string;
    id: string;
  }
}

interface MyRegistersProps {
  registeredTimes: ResgisteredTimes[];
  myId: string;
}

export default function MyRegisters({ registeredTimes, myId }: MyRegistersProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const { 'nextAuth.token': token } = parseCookies(); 

  const [currentPage, setCurrentPage] = useState(1);
  const [ times, setTimes ] = useState(registeredTimes);

  const indexOfLastTime = currentPage * 9;
  const indexOfFirstTime = indexOfLastTime - 9;
  const reversedTimes = [...times].reverse();
  const currentTimes = reversedTimes.slice(indexOfFirstTime, indexOfLastTime);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const [ registeTime ] = useCreateRegisteredTimeMutation();

  async function handleCreateNewRegisteredTime() {
    try {
      const { 'nextAuth.token': token } = parseCookies(); 

      await registeTime({
        context: {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        },
        variables: {
          id: myId
        }
      });

      const { data } = await client.query({
        query: gql`
          query GetMyRegisteredTimes($id: String!) {
            registeredTimes(where: { user: { id: $id } }) {
              user: user {
                name,
                id
              }
              created_at,
              id
              
            }
          }
        `,
        context: {
          headers: {
            "Authorization": `Bearer ${token}`
          },
        },
        variables: {
          id: myId
        }
      });

    const registeredTimes = data.registeredTimes;

    setTimes(registeredTimes);

    onClose();
    
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <>
      <Head>
        <title>PontoGo | Meus registros</title>
      </Head>

      <Flex
        w='100%'
        minH='calc(100vh)'
        bg='#F2F2F2'
      >
        <Sidebar isDrawer={false} />

        <Box w='100%' overflow='auto' mb='80px'>
          <Flex
            alignItems='center'
            w='100%'
            justify='space-between'
            mt={{base: '30px', md: ''}}
            px={{base: '16px', md: ''}}
          >
            <CustomDrawer />

            <CustomButton
              w='200px'
              ml='30px'
              mt={{base: '', md: '40px'}}
              bg='purple.900'
              _hover={{opacity: '0.8'}}
              onClick={onOpen}
            >
              Registrar ponto
            </CustomButton>
          </Flex>

          <CustomTable registeredTimes={currentTimes} />

          <CustomModal isOpen={ isOpen } onClose={ onClose } onTime={handleCreateNewRegisteredTime} />

          <Pagination 
            timesPerPage={9}
            curPage={currentPage}
            totalTimes={times.length}
            paginate={paginate} 
          />
        </Box>
      </Flex>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'nextAuth.token': token } = nookies.get(ctx);

  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: 'http://test.frontend.api.brainny.cc/graphql',
      headers: {
        cookie: token,
      },
    }),
    cache: new InMemoryCache(),
  });

  try {
    const { data: myData } = await client.query({
      query: gql`
        query GetMe {
          me {
            id,
          }
        }
      `,
      context: {
        headers: {
          "Authorization": `Bearer ${token}`
        },
      }
    });

    const myId = myData.me.id;

    const { data } = await client.query({
      query: gql`
        query GetMyRegisteredTimes($id: String!) {
          registeredTimes(where: { user: { id: $id } }) {
            user: user {
              name,
              id
            }
            created_at,
            id
            
          }
        }
      `,
      context: {
        headers: {
          "Authorization": `Bearer ${token}`
        },
      },
      variables: {
        id: myData.me.id
      }
    });

    const registeredTimes = data.registeredTimes;
  
    return {
      props: {
        registeredTimes,
        myId
      }
    }
  } catch (error) {
    nookies.destroy(ctx, 'nextAuth.token');

    return {
      redirect: {
        permanent: false,
        destination: '/login'
      }
    }
  }
}