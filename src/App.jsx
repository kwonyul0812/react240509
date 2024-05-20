import React from "react";
import {
  Box,
  Center,
  ChakraProvider,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Switch,
  Textarea,
} from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <Center>
        <Box w={{ base: "100%", md: "50%" }}>
          <FormControl>
            <FormLabel>이름</FormLabel>
            <Input />
          </FormControl>
        </Box>
      </Center>
      <hr />
      <Checkbox>lorem1</Checkbox>
      <Checkbox>lorem2</Checkbox>
      <Checkbox>lorem3</Checkbox>
      <Checkbox>lorem4</Checkbox>
      <RadioGroup>
        <Radio value={"1"}>1</Radio>
        <Radio value={"2"}>2</Radio>
        <Radio value={"3"}>3</Radio>
      </RadioGroup>
      <hr />
      <Switch />
      <Textarea></Textarea>
    </ChakraProvider>
  );
}

export default App;
