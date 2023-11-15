import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
  Image,
  Text,
  useColorModeValue,
  Stack,
  ChakraProvider,
} from '@chakra-ui/react';
import * as React from 'react';
import { OutsideLink } from '../../types/types';
import './Card.css';

interface Props {
  modalButtonText: string | undefined;
  modalHeader: string | undefined;
  modalBody: string | undefined;
  imageHref: string | undefined;
  modalButtonSubText: string | undefined;
  pi: string[] | null;
  metaDataPresentation?: Array<OutsideLink>;
  metaDataPublication?: Array<OutsideLink>;
}

export const Card: React.FC<Props> = ({
  modalButtonText,
  modalBody,
  imageHref,
  modalButtonSubText,
  pi,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box id="container" mt={10} onClick={onOpen}>
        <Box id="imgContainer">
          <Image
            src={imageHref}
            fallbackSrc="../../img/research/placeholder-research.png"
            alt="Card Image"
          />
        </Box>
        <Box p={5}>
          <Stack align="center">
            <Text id="modalText">{modalButtonText}</Text>
            <Text id="modalSubText">{modalButtonSubText}</Text>
          </Stack>
        </Box>
      </Box>
      <ChakraProvider>
        {isOpen && (
          <Modal isOpen={isOpen} onClose={onClose} size="2xl">
            <ModalOverlay />
            <ModalContent bg={useColorModeValue('#FAEDC5', '#DAAD20')}>
              <ModalCloseButton />
              <ModalBody>
                <>
                  <Image
                    src={imageHref}
                    fallbackSrc="../../img/research/placeholder-research.jpg"
                  />
                  <Box id="contentContainer">
                    <Text id="modalBodyText">{modalBody}</Text>
                    {pi && (
                      <>
                        <Text id="modalBodySubText">Collaborators: </Text>
                        {pi.map((person: string) => (
                          <Text m="0" key={person}>
                            {person}
                          </Text>
                        ))}
                      </>
                    )}
                  </Box>
                </>
              </ModalBody>
              <ModalFooter>
                <Button id="modalButton" onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </ChakraProvider>
    </>
  );
};
