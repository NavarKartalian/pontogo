import Head from "next/head";
import { GetServerSideProps } from "next";

import { useState } from 'react';

import nookies from 'nookies';

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

import { gql } from "@apollo/client";

import { Flex } from "@chakra-ui/react";
import { Sidebar } from "../../components/Sidebar";
import { CustomTable } from "../../components/CustomTable";
import { Pagination } from "../../components/Pagination";
import { CustomDrawer } from "../../components/CustomDrawer";

interface DashboardProps {
  registeredTimes: {
    id: string;
    created_at: string;
    user: {
      name: string;
      id: string;
    }
  }[];
}

export default function Dashboard({ registeredTimes }: DashboardProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastTime = currentPage * 9;
  const indexOfFirstTime = indexOfLastTime - 9;
  const reversedTimes = [...registeredTimes].reverse();
  const currentTimes = reversedTimes.slice(indexOfFirstTime, indexOfLastTime);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Head>
        <title>PontoGo | Dashboard</title>
      </Head>

      <Flex
        w='100%'
        minH='calc(100vh)'
        bg='#F2F2F2'
      >
        <Sidebar isDrawer={false} />

        <Flex direction='column' w='100%' mb='80px' overflow='auto'>
          <Flex
              alignItems='center'
              w='100%'
              justify='space-between'
              mt={{base: '30px', md: ''}}
              px={{base: '16px', md: ''}}
              overflow='auto'
            >
              <CustomDrawer />
            </Flex>

          <CustomTable registeredTimes={currentTimes} />

          <Pagination 
            timesPerPage={9}
            curPage={currentPage}
            totalTimes={registeredTimes.length}
            paginate={paginate} 
          />
        </Flex>
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
    const { data } = await client.query({
      query: gql`
        query GetRegisteredTimes{
          registeredTimes {
            id,
            created_at,
            user: user {
              name,
              id
            }
          }
        }
      `,
      context: {
        headers: {
          "Authorization": `Bearer ${token}`
        },
      }
    });

    const registeredTimes = data.registeredTimes;

    return {
      props: {
        registeredTimes,
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