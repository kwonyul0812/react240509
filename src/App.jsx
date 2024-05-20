import React from "react";
import {
  Box,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <Box w={{ base: "100%", md: "50%" }}>
        <FormControl>
          <FormLabel>이름</FormLabel>
          <Input />
        </FormControl>
      </Box>
    </ChakraProvider>
  );
}

export default App;
