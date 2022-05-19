import React from 'react'
import { Flex, Box, Grid, Text, Icon, Button, Image, theme } from '@chakra-ui/react'

const Main = () => {
  return (
    <Grid
        h={"110vh"}
        w={"100vw"}
        bg={"#080808"}
        autoFlow={"column"}
        fontFamily={""}
        id={"about"}
    >
      <Flex
        w={"50vw"}
        justifyContent="center"
        alignItems={'center'}
        h={"110vh"}
      >
        <Box
          p={'5vw'}
          bg={'#ad1d71'}
          borderBottomRadius={'50%'}
          borderTopRightRadius={'50%'}
          background="radial-gradient(circle, rgba(210,68,151,1) 0%, rgba(34,5,22,1) 100%)"
          boxShadow={"1px 1px 10px 5px #410a2a"}
        >
          <Image src={"https://res.cloudinary.com/diylksocz/image/upload/v1652816815/vaporwave_zvehmb.png"} w={550} h={450} />
        </Box>
      </Flex>
      <Grid
        justifyContent={'center'}
        alignContent={'center'}
        w={"50vw"}
        gap={'5vh'}
      >
        <Text
          fontSize={'6xl'}
          textShadow={'2px 2px 1px #410a2a'}
          _before={{ 
            content: '" "',
            position: 'absolute',
            height: '0.1em',
            width: '500px',
            background: "linear-gradient(to right, #ad1d71, #d6248c, #691144)",
            top: '',
            boxShadow: '0px 0px 5px #ad1d71',

           }}
        >
          About me
        </Text>
        <Text>
          Ad pariatur ad non pariatur sit esse veniam aliqua. Labore laborum fugiat dolor id qui aliquip elit nulla consequat nisi nisi pariatur. Adipisicing magna anim qui nostrud amet mollit veniam laborum elit do occaecat. Duis non duis in incididunt. Velit eu quis amet anim magna ut sit.Ad elit eiusmod enim officia qui deserunt culpa esse proident. Exercitation culpa commodo et fugiat anim in occaecat esse nisi dolore adipisicing nostrud eu do. Exercitation laboris magna fugiat nulla. Ut officia deserunt tempor elit ea in est eu. Id excepteur adipisicing adipisicing et sunt et proident. Excepteur mollit qui mollit cupidatat excepteur sint dolor consequat. Est labore voluptate adipisicing minim tempor nulla nostrud ad nostrud occaecat sint.Reprehenderit in et eiusmod magna aute officia ad ad. Eu qui exercitation anim tempor dolore consectetur nulla ea minim et. Aliquip adipisicing do enim qui enim et aliqua qui quis in. Laboris adipisicing deserunt do incididunt fugiat commodo aliqua do amet minim cupidatat duis. Dolor exercitation magna laborum excepteur non exercitation pariatur ea ad deserunt incididunt ea.
        </Text>
      </Grid>
    </Grid>
  )
}

export default Main