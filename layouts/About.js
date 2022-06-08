import React from "react";
import {
	Flex,
	Box,
	Grid,
	Text,
	Icon,
	Button,
	Image,
	theme,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Main = () => {
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
				h={["70vh", "70vh", "70vh", "70vh", "80vh"]}
				w={"100vw"}
				bg={"#080808"}
				autoFlow={["row", "row", "row", "row", "column"]}
				fontFamily={""}
				id={"about"}
				justifyContent={"center"}
			>
				<Flex
					w={["100%", "100%", "50vw", "50vw"]}
					display={["none", "none", "none", "none", "flex"]}
					justifyContent="center"
					alignItems={["center"]}
					h={"auto"}
				>
					<Box
						p={"5vw"}
						bg={"#ad1d71"}
						borderBottomRadius={"50%"}
						borderTopRightRadius={"50%"}
						background="radial-gradient(circle, rgba(210,68,151,1) 0%, rgba(34,5,22,1) 100%)"
						boxShadow={"1px 1px 10px 5px #410a2a"}
					>
						<Image
							src={
								"https://res.cloudinary.com/diylksocz/image/upload/v1652816815/vaporwave_zvehmb.png"
							}
							w={[200, 200, 550, 550]}
							h={[200, 200, 350, 550]}
						/>
					</Box>
				</Flex>
				<Grid w={["90vw", "90vw", "90vw", "80vw", "50vw"]} gap={"5vh"}>
					<Text
						fontSize={["6xl", "6xl", "8xl", "8xl", "8xl"]}
						justifySelf={"center"}
						w={"80%"}
						textAlign={"center"}
						textShadow={"2px 2px 1px #ad1d71"}
						_before={{
							content: '""',
							position: "relative",
							display: "block",
							width: "100%",
							height: "4px",
							background: "linear-gradient(to right, #ad1d71, #FF81BE)",
							
							boxShadow: "0px 0px 10px #ad1d71",
						}}
					>
						About
					</Text>
					<Flex justify={"center"}>
						<Text
							fontSize={["xl", "xl", "xl", "2xl"]}
							textAlign="center"
							w={"90%"}
						>
							Soy un desarrollador fullstack, con una pequeña obsesión con la
							organización y el diseño milimétrico. La tecnología y la ciencia
							desde siempre son mi pasión e interés lo que me llevó a
							introducirme hace 1 año al diseño de aplicaciones web.
						</Text>
					</Flex>
				</Grid>
			</Grid>
		</motion.div>
	);
};

export default Main;
