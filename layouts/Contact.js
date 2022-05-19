import { Box, Button, Flex, FormControl, Grid, Input, Text } from '@chakra-ui/react'
import React from 'react'
import FormInput from '../components/FormInput'

const Contact = () => {
  return (
    <>
        <Grid
            w="100vw"
            h='100vh'
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Flex
                w="70vw"
                h="80vh"
            >
                {/*--------Left Box ---------**/}
                <Flex
                    w="50%"
                    h="100%"
                    bg={'#131313'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexDir={'column'}
                >
                    <Text fontSize={'6xl'} marginBottom={'0vh'}>Contact me</Text>
                    <FormControl
                        display={'flex'}
                        flexDir={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={'2vh'}
                        py='2vh'
                    >
                        <FormInput type='name' placeholder={'Name'} id='name'/>
                        <FormInput type='email' placeholder={'Email'} id='email'/>
                        <FormInput type='message' placeholder={'Message'} id='message'/>
                         
                         
                         
                        <Box
                            mt={'5vh'}
                            w={'30%'}
                            h={'50px'}
                            bg={'rgba(255,255,255,0)'}
                            outline={'1px solid #ad1d71'}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            transition={'all 0.3s ease-in-out'}
                            _hover={{
                                bg: '#ad1d71',
                                boxShadow: '0px 0px 10px #ad1d71',
                            }}
                        >
                            Enviar
                        </Box>
                    </FormControl>
                </Flex>


                {/*--------Right Box ---------**/}



                <Flex
                    w="50%"
                    h="100%"
                    bg={'#ad1d71'}
                >

                </Flex>
            </Flex>
        </Grid>
    </>
  )
}

export default Contact