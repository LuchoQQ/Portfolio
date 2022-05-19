import React from 'react'
import { Grid, Flex, Text, Badge } from '@chakra-ui/react'
import RadialMenu from '../components/RadialMenu'



const Skills = () => {
  return (
    <>
        <Grid
            w="100vw"
            h="100vh"
            autoFlow={'row'}
            id="skills"
        >
            <Flex
                w="100vw"
                h="20vh"
                justify={'center'}
                alignItems={'center'}
            >
                <Text 
                    fontSize={'6xl'}
                    textShadow={'2px 2px 1px #ad1d71'}
                    position={'relative'}
                    _before={{
                        content: '""',
                        position: 'relative',
                        display: 'block',
                        width: '100%',
                        height: '2px',
                        background: 'linear-gradient(to right, #ad1d71, #FF81BE)',
                        top: '5rem',
                        boxShadow: '0px 0px 10px #ad1d71',
                    }}
                    >
                    Skills
                </Text>
            </Flex>


            <Grid
                autoFlow={'column'}
            >
                <Flex
                w="50vw"
                h="80vh"
                alignItems="center"
                justifyContent="center"
            >
                <Grid
                    justifyContent={'center'}
                >    
                    <Text 
                        fontSize={'4xl'} 
                        justifySelf={'center'}
                        textShadow={'1px 1px 1px #ad1d71'}
                        >Technical Skills</Text>
                    <RadialMenu />
                </Grid>
            </Flex>





            <Flex
                w="50vw"
                h="80vh"
                justifyContent={'center'}
                alignItems={'center'}
                listStyleType={'none'}
                fontSize={'2rem'}
            >
                <Grid
                    justifyContent={'center'}
                    gap={'3rem'}
                >
                    
                    <Flex flexDir={'column'}>
                        
                    </Flex>
                    <Text
                        fontSize={'3xl'}
                    >
                        Heading 1
                    </Text>
                    <Text
                        fontSize={'xl'}
                        marginRight={'10rem'}
                    >
                        Laborum labore occaecat laborum id Lorem adipisicing fugiat culpa exercitation. Laborum commodo duis pariatur amet ea fugiat deserunt excepteur excepteur ullamco. Ipsum pariatur excepteur consequat officia adipisicing quis deserunt aliquip. Sint amet esse id enim anim. In nulla voluptate do consectetur duis Lorem id dolor.
                        Excepteur non ullamco anim est pariatur elit sint. Et nisi deserunt quis aute. Veniam do aliquip deserunt duis esse fugiat ex amet eu. Do esse pariatur deserunt tempor cupidatat ex aliqua. Sit eiusmod qui pariatur incididunt nulla veniam culpa anim ut labore deserunt. Pariatur anim reprehenderit commodo ullamco excepteur ut ex id proident.
                    </Text>
                    <Flex
                        flexDir={'column'}
                    >
                        <Flex
                            marginBottom={'0.5rem'}
                        >
                            <Badge colorScheme={'blue'} ml='2' fontSize={'md'}>HTML5</Badge>
                            <Badge colorScheme={'blue'} ml='1' fontSize={'md'}>CSS3</Badge>
                            <Badge colorScheme={'blue'} ml='1' fontSize={'md'}>Javascript</Badge>
                            <Badge colorScheme={'blue'} ml='1' fontSize={'md'}>React</Badge>
                            <Badge colorScheme={'blue'} ml='1' fontSize={'md'}>Node</Badge>
                            
                        </Flex>
                        <Flex>
                            <Badge colorScheme={'blue'} ml='1' fontSize={'md'}>Mongo</Badge>
                            <Badge colorScheme={'blue'} ml='1' fontSize={'md'}>Next</Badge>
                            <Badge colorScheme={'blue'} ml='1' fontSize={'md'}>TypeScript</Badge>
                            <Badge colorScheme={'blue'} ml='1' fontSize={'md'}>HTML5</Badge>
                        </Flex>
                    </Flex>
                </Grid>
            </Flex>
            </Grid>

        </Grid>
    </>
  )
}

export default Skills