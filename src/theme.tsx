import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  textStyles: {
    title: {
      fontSize: "28px",
      fontWeight: "700",
      lineHeight: "32px",
    },
    description: {
      fontSize: "24px",
      fontWeight: "500",
      lineHeight: "28px",
    },
    price: {
      fontSize: "32px",
      fontWeight: "400",
      lineHeight: "32px",
    },
    stock: {
      fontSize: "28px",
      fontWeight: "400",
      lineHeight: "32px",
    },
  },
});

export default theme;
