import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <Button colorScheme={"gray"}>Gray</Button>
        <Button colorScheme={"red"}>Lorem.</Button>
        <Button colorScheme={"orange"}>Sunt.</Button>
        <Button colorScheme={"yellow"}>Nam.</Button>
        <Button colorScheme={"green"}>Cum?</Button>
        <Button colorScheme={"teal"}>Maiores.</Button>
        <Button colorScheme={"blue"}>Eligendi!</Button>
        <Button colorScheme={"cyan"}>Esse.</Button>
        <Button colorScheme={"purple"}>Iusto?</Button>
        <Button colorScheme={"pink"}>Ex.</Button>
        <hr />
        <Button colorScheme={"blue"} isLoading={true}>
          Lorem.
        </Button>
        <Button colorScheme={"blue"} variant={"solid"}>
          Lorem.
        </Button>
        <Button colorScheme={"blue"} variant={"outline"}>
          Voluptate?
        </Button>
        <Button colorScheme={"blue"} variant={"ghost"}>
          Reprehenderit!
        </Button>
        <Button colorScheme={"blue"} variant={"link"}>
          Consectetur!
        </Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
