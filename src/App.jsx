import React from "react";
import {
  Button,
  ChakraProvider,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

function App(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider>
      <Button onClick={onOpen}>모달 오픈</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent></ModalContent>
      </Modal>
    </ChakraProvider>
  );
}

export default App;
