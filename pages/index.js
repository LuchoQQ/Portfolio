import Head from "next/head";
import clientPromise from "../lib/mongodb";
import Navbar from "../layouts/Navbar";
import Background from "../components/Background";
import { Flex, Image, Text } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import Img from "../components/Image";
import Hero from "../layouts/Hero";
import About from "../layouts/About";
import Skills from "../layouts/Skills";
import Portfolio from "../layouts/Portfolio";
import Contact from "../layouts/Contact";
import Footer from "../layouts/Footer";

export default function Home() {
	const theme = useTheme();
	return (
		<>
			<Head>
				<title>LuchoQQ Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Background>
				<Navbar />
				<Flex h={"15vh"} id='home'/>
				<Hero />
				<Flex h={"15vh"} id="about" />
				<About />
				<Flex h={"15vh"} id="skills" />
				<Skills />
				<Flex h={"15vh"} id="portfolio" />
				<Portfolio />
				<Flex h={"15vh"} id="contact" />
				<Contact />
				{/* <Footer /> */}
			</Background>
		</>
	);
}

export async function getServerSideProps(context) {
	try {
		await clientPromise;
		return {
			props: { isConnected: true },
		};
	} catch (e) {
		console.error(e);
		return {
			props: { isConnected: false },
		};
	}
}
