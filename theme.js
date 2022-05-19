import { extendTheme } from "@chakra-ui/react";
import "@fontsource/space-mono";

const theme = extendTheme({
    fonts: {
        primary: "Space Mono",
    },
    colors: {
        primary: "#D22589",
        secondary: "#FF81BE",
        tertiary: "#fff",
    },
});

export default theme