import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  brand: {
    50: "#e6f1ff",
    100: "#b3d4ff",
    200: "#80b7ff",
    300: "#4d9aff",
    400: "#1a7dff",
    500: "#0066e6",
    600: "#0052b3",
    700: "#003d80",
    800: "#00294d",
    900: "#00141a",
  },
  accent: {
    50: "#f0f9ff",
    100: "#d0eeff",
    200: "#b0e3ff",
    300: "#90d8ff",
    400: "#70cdff",
    500: "#50c2ff",
    600: "#30b7ff",
    700: "#10acff",
    800: "#0097e6",
    900: "#0082cc",
  },
};

const theme = extendTheme({
  config,
  colors,
  fonts: {
    heading: "system-ui, sans-serif",
    body: "system-ui, sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "500",
        borderRadius: "md",
      },
    },
  },
  styles: {
    global: (props: { colorMode: "light" | "dark" }) => ({
      body: {
        bg: props.colorMode === "light" ? "gray.50" : "gray.900",
      },
    }),
  },
});

export default theme;
