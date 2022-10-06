import { Button, FormLabel, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

interface LoginInputProps {
  label: string;
  placeholder: string;
  type: 'password' | 'email'
  value?: string;
  setValue: (value: string) => void;
  setIsInvalid: (value: boolean) => void;
}

export function LoginInput({ label, placeholder, type, value, setValue, setIsInvalid }: LoginInputProps) {
  const [ showPassword, setShowPassword ] = useState(false);

  return (
    <>
      <FormLabel color='gray.900' fontSize='20px'>
        {label}
      </FormLabel>

      {type === 'password' ? (
        <InputGroup size='md'>
          <Input 
            type={showPassword ? 'text' : 'password'}
            borderColor='rgba(32, 41, 46, 0.3)'
            color='rgba(32, 41, 46, 0.6)'
            px='20px'
            py='12px'
            placeholder={placeholder}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setIsInvalid(false);
            }}
          />

          <InputRightElement width='4.5rem'>
            <Button 
              bg='transparent' 
              size='xs' 
              onClick={() => setShowPassword(!showPassword)}
              color='purple.900'
            >
              {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
            </Button>
          </InputRightElement>
        </InputGroup>
      ) : (
        <Input 
          type={type}
          borderColor='rgba(32, 41, 46, 0.3)'
          color='rgba(32, 41, 46, 0.6)'
          px='20px'
          py='12px'
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setIsInvalid(false);
          }}
        />
      )}
    </>
  );
}