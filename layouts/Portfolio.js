import React from 'react'
import { Grid, Flex, Text, Box } from '@chakra-ui/react'
const Portfolio = () => {
  return (
    <>
        <Grid
            w="100vw"
            h='100vh'
            id='portfolio'
        >
            <Flex
                w="100vw"
                h="20vh"
                justify={'center'}
                alignItems={'center'}
            >
                <Text
                    fontSize={'6xl'}
                    textShadow={'1px 1px 1px #ad1d71'}
                >
                    My Projects
                </Text>
            </Flex>
            <Grid
                w="100vw"
                h="80vh"
                justifyContent={'center'}
                alignItems={'center'}
                autoFlow={'column'}
                gap={'5rem'}
            >
                <Box
                    w="20vw"
                    h='40vh'
                    bg={'#ad1d71'}
                ></Box>
                <Box
                    w="20vw"
                    h='40vh'
                    bg={'#ad1d71'}
                ></Box>
                <Box
                    w="20vw"
                    h='40vh'
                    bg={'#ad1d71'}
                ></Box>
                    
                
            </Grid>
        </Grid>
    </>
  )
}

export default Portfolio