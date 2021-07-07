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
} from '@chakra-ui/react';
import * as React from 'react';

interface Props {
  modalButtonText: string | undefined;
  modalHeader: string | undefined;
  modalBody: string | undefined;
  imageHref: string | undefined;
}

export const Card: React.FC<Props> = ({
  modalButtonText,
  modalHeader,
  modalBody,
  imageHref,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box width="100%" onClick={onOpen}>
        <Image maxWidth="100%" height="auto" src={imageHref} />
        <Box p="1em" display="block">
          <Text textStyle="h2" fontWeight="800" fontStyle="normal">
            {modalButtonText}
          </Text>
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text textStyle="h2" m="0">
              {modalHeader}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text textStyle="paragraph" m="0">
              {modalBody}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="ghost"
              mr={3}
              onClick={onClose}
              textAlign="center"
              width="100%"
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
