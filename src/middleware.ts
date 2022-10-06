import { NextRequest, NextResponse } from "next/server";

import { gql } from "@apollo/client";

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('nextAuth.token');
  const response = NextResponse.next();

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

  const url = req.nextUrl.clone();

  if(!token && (url.pathname === '/dashboard' || url.pathname === '/meus-registros')) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  try {
    if(token) {
      const { data } = await client.query({
        query: gql`
          query GetMe {
            me {
              username,
              role: role{
                name,
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
  
      if(url.pathname === '/login') {
        if(data.me.role.name === 'admin') url.pathname = '/dashboard';
        if(data.me.role.name === 'user') url.pathname = '/meus-registros';
    
        return NextResponse.redirect(url);
      }

      if(url.pathname === '/dashboard' && data.me.role.name === 'user') {
        url.pathname = '/meus-registros';
    
        return NextResponse.redirect(url);
      }

      if(url.pathname === '/meus-registros' && data.me.role.name === 'admin') {
        url.pathname = '/dashboard';
    
        return NextResponse.redirect(url);
      }
    }
  } catch (error) {
    console.log(error);
    response.cookies.set('nextAuth.token', '')
    response.cookies.delete('nextAuth.token');
    response.cookies.clear();

    return response;
  }

  return NextResponse.next();
}