import { FormEvent, useState } from "react";
import { useRouter } from 'next/router';

import { FormControl, FormHelperText, Link } from "@chakra-ui/react";

import { client } from "../../lib/apollo";
import { gql } from "@apollo/client";
import { setCookie } from "nookies";

import { CustomButton } from "../CustomButton";
import { LoginInput } from "./LoginInput";


export function LoginForm() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ isInvalid, setIsInvalid ] = useState(false);

  const route = useRouter();

  const LOGIN = gql`
    mutation Login($password: String!, $identifier: String!) {
      login(input: {password: $password, identifier: $identifier}) {
        jwt,
        user: user {
          id,
          username,
          email,
          role: role {
            id,
            name
          }
        }
      }
    }
  `;

  async function handleLogin(e: FormEvent) {
    e.preventDefault();

    let token = '';

    await client.mutate({
      mutation: LOGIN,
      variables: { password: password, identifier: email }
    }).then(({ data }) => token = data.login.jwt)
    .catch(() => setIsInvalid(true));

    setCookie(null, 'nextAuth.token', token, {
      maxAge: 60 * 60 * 24,
      path: '/',
    });

    if(!token) return;

    setEmail('');
    setPassword('');

    route.reload();
  }

  return (
    <form onSubmit={handleLogin}>
      <FormControl
        mt='24px'
        isRequired
        isInvalid={isInvalid}
      >
        
        {isInvalid && 
          <FormHelperText fontSize='18px' color='red.500'>
            Email ou senha invalidos
          </FormHelperText>}

        <LoginInput 
          value={email}
          setValue={setEmail}
          label="Email"
          placeholder="exemplo@email.com"
          type="email"
          setIsInvalid={setIsInvalid}
        />
      </FormControl>

      <FormControl
        mt='24px'
        isRequired
        isInvalid={isInvalid}
      >
        <LoginInput 
          value={password}
          setValue={setPassword}
          label="Senha"
          placeholder="*************"
          type="password"
          setIsInvalid={setIsInvalid}
        />
      </FormControl>

      <Link
        as='button'
        color='purple.900'
        mt='10px'
        fontSize='15px'
        textDecor='underline'
        type='button'
        onClick={() => {}} //Logica para recuperar senha
      >
        Esqueci minha senha
      </Link>

      <CustomButton
        w='100%'
        mt='30px'
        bg='purple.900'
        _hover={{opacity: '0.9'}}
        type='submit'
      >
        Entrar
      </CustomButton>
    </form>
  );
}