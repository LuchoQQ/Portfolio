import React from 'react'
import { Grid, Flex, Text, Box } from '@chakra-ui/react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";	

const Portfolio = () => {

    const control = useAnimation();
	const [ref, inView] = useInView();

	const boxVariant = {
		visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
		hidden: { opacity: 0, scale: 0 },
	};

	useEffect(() => {
		if (inView) {
			control.start("visible");
		}
	}, [control, inView]);

  return (
    <motion.div
        className="box"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
    >
        <Grid
            w="100vw"
            h={['auto', 'auto', 'auto', 'auto', '100vh']}
            id='portfolio'
        >
            <Flex
                w="100vw"
                h="auto"
                justify={'center'}
                alignItems={'center'}
                >
                <Text
                    fontSize={['4xl', '5xl', '6xl', '6xl', '6xl']}
                    textShadow={'1px 1px 1px #ad1d71'}
                    w={'50%'}
                    textAlign={'center'}
                    _before={{ 
                        content: '""',
                        position: "relative",
                        display: "block",
                        width: "100%",
                        height: "4px",
                        background: "linear-gradient(to right, #ad1d71, #FF81BE)",
                        boxShadow: "0px 0px 10px #ad1d71",
                    }}
                    mb={['20vh', '20vh', '20vh', '20vh', '0vh']}
                >
                    My Projects
                </Text>
            </Flex>
            <Grid
                w="100vw"
                h="auto"
                justifyContent={'center'}
                alignItems={'center'}
                autoFlow={['row', 'row','row','row', 'column']}
                gap={'5rem'}
            >
                <Box
                    w={["60vw", "50vw", "30vw", "30vw","20vw"]}
                    h={['30vh', '40vh', '40vh', '30vw', '40vh']}
                    bg={'#ad1d71'}
                ></Box>
                
                <Box
                    w={["60vw", "50vw", "30vw", "30vw","20vw"]}
                    h={['30vh', '40vh', '40vh', '30vw', '40vh']}
                    bg={'#ad1d71'}
                ></Box>

                <Box
                    w={["60vw", "50vw", "30vw", "30vw","20vw"]}
                    h={['30vh', '40vh', '40vh', '30vw', '40vh']}
                    bg={'#ad1d71'}
                ></Box>
                    
                
            </Grid>
        </Grid>
    </motion.div>
  )
}

export default Portfolio