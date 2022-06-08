import React from "react";
import { Link } from "react-scroll";
import { Text } from "@chakra-ui/react";
const LinkScroll = ({ path, name }) => {
	return (
		<>
			<Link to={path} spy={true} smooth={true} duration={500}>
				<Text
					fontFamily={"Space Mono"}
					fontSize={{ base: "md", md: "md", lg: "lg" }}
					cursor={"pointer"}
					color={"#fff"}
					_hover={{
						color: "#FF81BE",
						textShadow: "0px 0px 3px #FF81BE",
						transform: "scale(1.2)",
					}}
					transition={"all 0.2s ease-in-out"}
					px={"0.5vw"}
				>
					{name}
				</Text>
			</Link>
		</>
	);
};

export default LinkScroll;
