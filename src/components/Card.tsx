import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';

interface Props {
  modalButtonText: string | undefined;
  modalHeader: string | undefined;
  modalBody: string | undefined;
  imageHref: string | undefined;
  modalButtonSubText: string | undefined;
  pi: React.ReactElement | null;
}

export const Card: React.FC<Props> = ({
  modalButtonText,
  modalHeader,
  modalBody,
  imageHref,
  modalButtonSubText,
  pi,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box width="100%" onClick={onOpen}>
        <Box borderBottom="2px solid black">
          <Image
            maxWidth="100%"
            height="10rem"
            src={imageHref}
            fallbackSrc="../../img/research/placeholder-research.jpg"
            width="100%"
            objectFit="cover"
          />
        </Box>
        <Box p="1.5em" display="block" height="10rem">
          <Text
            fontSize="1.75rem"
            fontWeight="800"
            fontStyle="normal"
            color={useColorModeValue('black', 'white')}
            pb="1rem"
          >
            {modalButtonText}
          </Text>
          <Text
            fontSize="1.125rem"
            color={useColorModeValue('black', '#b2becd')}
          >
            {modalButtonSubText}
          </Text>
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent padding="1rem" bg={useColorModeValue('white', '#2a2e35')}>
          <ModalCloseButton />
          <ModalBody>
            <Text textStyle="paragraph" m="0">
              {modalBody}
            </Text>

            {pi == null ? (
              <Text textStyle="paragraph">{pi}</Text>
            ) : (
              <Text textStyle="paragraph">PI: {pi}</Text>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              variant="ghost"
              mr={3}
              onClick={onClose}
              textAlign="center"
              width="100%"
            >
              Okay
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
