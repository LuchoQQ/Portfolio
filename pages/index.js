import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import Navbar from '../layouts/Navbar'
import Background from '../components/Background'
import {Image, Text} from '@chakra-ui/react'
import { useTheme } from '@chakra-ui/react'
import Img from '../components/Image'
import Hero from '../layouts/Hero'
import About from '../layouts/About'
import Skills from '../layouts/Skills'
import Portfolio from '../layouts/Portfolio'
import Contact from '../layouts/Contact'

export default function Home() {
  const theme = useTheme()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </Background>
    </>
  )
}

export async function getServerSideProps(context) {
  try {
    await clientPromise
    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
