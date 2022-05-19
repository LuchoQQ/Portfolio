import { Input } from '@chakra-ui/react'
import React from 'react'

const FormInput = ({type, placeholder, id}) => {
  return (
    <>
        <Input
            type={type}
            placeholder={placeholder}
            id={id} 
            color={'#131313'}
            variant={'flushed'}
            p={'2vw'}
            w={'50%'}
            color={'#dedede'}
            fontSize={'xl'}
            focusBorderColor={'#ad1d71'}
        />
    </>
  )
}

export default FormInput