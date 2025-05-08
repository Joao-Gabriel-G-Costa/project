import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout";
import theme from "./theme";
import Login from "./components/Login";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Login/>
    </ChakraProvider>
  );
}

export default App;
