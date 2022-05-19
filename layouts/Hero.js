import React from 'react'
import { Flex, Grid, Box, Image, Text, Input} from '@chakra-ui/react'

import {motion} from 'framer-motion'

const Hero = () => {
  const initial = {
    opacity: 0,
    y: -100
  }

  const animate = {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9],
      delay: 0.5
    }
  }


  return (
    <>
      <Grid
        autoFlow="column"
        width={"100vw"}
        position={"relative"}
        height={"90vh"}
        zIndex={"100"}
        
      >
          <Box
            width={'50vw'}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <motion.div
              initial={initial}
              animate={animate}
              fontSize={'5vw'}
              fontWeight={'bold'}
              color={'#fff'}
              textShadow={'0px 0px 10px #FF81BE'}
              >
              <Text
                fontSize={"1.5rem"}
                color={"#fff"}
                textShadow={'2px 0px 0px #ad1d71'}
              >
                Hello, my name is
              </Text>

            
            
            
            <Text
              fontSize={"3rem"}
              textShadow={'2px 0px 0px #ad1d71'}
            >
              Luciano <span style={{ color: "#ad1d71"}}>Sánchez</span>
            </Text>
            <Text
              fontSize={"1.5rem"}
              textShadow={'2px 0px 0px #ad1d71'}
            >
              I am Frontend Developer
            </Text>
            <Box marginTop={"15vh"}>
              <Text 
                marginBottom={'2vh'}
                textShadow={'1px 0px 0px #ad1d71'}
              >Enter your Email.</Text>
              <Input focusBorderColor={"#ad1d71"} placeholder='Insert ur email' size='lg' w={"25vw"}/>
            </Box>
            </motion.div>
          </Box>
          <Box
            width={"50vw"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box 
              width={"500px"}
              height={"500px"}
              bg={"rgba(0,0,0,0)"}
              borderRadius={'50%'}
              outline={"10px solid #ad1d71"}
              boxShadow={'1px 1px 100px #ad1d71, inset -1px -1px 20px #ad1d71'}
              position={"absolute"}
              overflowY={"hidden"}
            >
              <Image 
                src='https://res.cloudinary.com/diylksocz/image/upload/v1652741247/foto_eblyef.png' alt="idk"
                width={'350px'}
                filter={"grayscale(100%)"}
                position={'absolute'}
                zIndex={'-10'}
                objectFit={'cover'}
                marginLeft={'4.5vw'}
                marginTop={"5vh"}
            />
            </Box>
            
          </Box>
      </Grid>

    </>
  )
}

export default Hero