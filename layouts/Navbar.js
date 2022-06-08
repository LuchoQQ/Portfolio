import React from "react";
import { Flex, Box, Grid, Text, Icon, Button, theme } from "@chakra-ui/react";
import MenuItem from "../components/MenuItem";
import { FaCode } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@emotion/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-scroll'
import LinkScroll from "../components/LinkScroll";
const Navbar = () => {
	const theme = useTheme();
	const initial = {
		opacity: 0,
		y: -100,
	};

	const animate = {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			ease: [0.6, 0.05, -0.01, 0.9],
			staggerChildren: 0.1,
		},
	};

	return (
		<Grid
			autoFlow={"column"}
			alignContent={"center"}
			justifyContent="space-around"
			height={"15vh"}
			width={"100vw"}
			zIndex={"10000"}
			bg={"rgba(0,0,0,0.8)"}
			position={"fixed"}
		>
			<Icon
				as={FaCode}
				w={24}
				h={24}
				fill={"#ad1d71"}
				transition={"all 0.2s ease-in-out"}
				_hover={{ fill: "#FF81BE" }}
				fontFamily={"Space Mono"}
			/>
			<Flex alignItems="center">
				<Grid
					autoFlow={["none", "none", "none", "column"]}
					ml="2vw"
					alignContent={"center"}
					gap={"4vw"}
					p={"1vw"}
					display={["none", "none", "none", "flex"]}
				>
					<LinkScroll path="home" name={"Home"} />
					<LinkScroll path="about" name={"About"} />
					<LinkScroll path="skills" name={"Skills"} />
					<LinkScroll path="portfolio" name={"Portfolio"} />
					<LinkScroll path="contact" name={"Contact"} />
				</Grid>

				<Flex
					borderRadius="20px"
					ml="5vw"
					py={3}
					px={10}
					alignItems="center"
					color={"#fff"}
					outline={"2px solid #D22589"}
					_hover={{
						color: "#fff",
						textShadow: "0px 0px 10px #FF81BE",
						bg: "#D22589",
						boxShadow: "0px 0px 10px #FF81BE",
					}}
					transition={"all 0.2s ease-in-out"}
					cursor={"pointer"}
					fontFamily={"Space Mono"}
					display={["none", "none", "flex", "flex"]}
				>
					Curriculum
				</Flex>
				<Icon
					as={GiHamburgerMenu}
					w={10}
					h={10}
					display={["flex", "flex", "none", "none"]}
				/>
			</Flex>
		</Grid>
	);
};

export default Navbar;
