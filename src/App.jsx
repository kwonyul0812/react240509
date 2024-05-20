import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div
        style={{
          padding: "10px",
          margin: "20px",
          border: "1px solid black",
          backgroundColor: "tomato",
        }}
      >
        Lorem ipsum dolor.
      </div>
      <Box p={"10px"} m={"20px"} border={"1px solid black"} bgColor={"tomato"}>
        Lorem ipsum dolor.
      </Box>
      <Box bgColor={"orange.50"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.100"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.200"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.300"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.400"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.500"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.600"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.700"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.800"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.900"}>Lorem ipsum dolor.</Box>
      <hr />
      <Box m={"10px"} bgColor={"yellow"}>
        Lorem ipsum dolor.
      </Box>
      <Box mt={"10px"} bgColor={"yellow"}>
        Ab, cum, quidem.
      </Box>
      <Box mb={"10px"} bgColor={"yellow"}>
        Beatae, exercitationem nihil.
      </Box>
      <Box ml={"10px"} bgColor={"yellow"}>
        Consequatur, et suscipit?
      </Box>
      <Box mr={"10px"} bgColor={"yellow"}>
        Molestiae odit, tempora.
      </Box>
      <Box mx={"10px"} bgColor={"yellow"}>
        Adipisci, architecto mollitia.
      </Box>
      <Box my={"10px"} bgColor={"yellow"}>
        Dolore, dolorem facere!
      </Box>
      <hr />
      <Box bgColor={"teal"} p={"10px"}>
        Lorem ipsum dolor.
      </Box>
      <Box bgColor={"teal"} pt={"10px"}>
        Autem delectus, dolore.
      </Box>
      <Box bgColor={"teal"} pb={"10px"}>
        Maiores, praesentium, voluptates.
      </Box>
      <Box bgColor={"teal"} pl={"10px"}>
        Porro quaerat, quisquam.
      </Box>
      <Box bgColor={"teal"} pr={"10px"}>
        Illum necessitatibus, totam.
      </Box>
      <Box bgColor={"teal"} px={"10px"}>
        Fuga, impedit, voluptatibus!
      </Box>
      <Box bgColor={"teal"} py={"10px"}>
        Accusantium, dolorum, quisquam.
      </Box>
      <hr />
      <Box w={"500px"}>Lorem ipsum dolor.</Box>
      <Box h={"500px"}>Ipsam quibusdam, tempore.</Box>
    </ChakraProvider>
  );
}

export default App;
