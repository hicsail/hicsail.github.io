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
  Link,
} from '@chakra-ui/react';
import * as React from 'react';
import { OutsideLink } from '../types/types';

interface Props {
  modalButtonText: string | undefined;
  modalHeader: string | undefined;
  modalBody: string | undefined;
  imageHref: string | undefined;
  modalButtonSubText: string | undefined;
  pi: React.ReactElement | null;
  metaData: Array<OutsideLink>;
}

export const Card: React.FC<Props> = ({
  modalButtonText,
  modalHeader,
  modalBody,
  imageHref,
  modalButtonSubText,
  pi,
  metaData,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box width="100%" onClick={onOpen}>
        <Box borderBottom="2px solid black">
          <Image
            maxWidth="100%"
            height="10rem"
            width="100%"
            objectFit="cover"
            src={imageHref}
            fallbackSrc="../../img/research/placeholder-research.jpg"
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
            <Image
              // maxWidth="100%"
              // height="10rem"
              // width="100%"
              objectFit="cover"
              src={imageHref}
              fallbackSrc="../../img/research/placeholder-research.jpg"
            />{' '}
            <Text textStyle="paragraph" m="0">
              {modalBody}
            </Text>
            {metaData.map(({ name, href }) => (
              <Text textStyle="paragraph" m="0" color="teal">
                <Link as="a" href={href}>
                  {name}
                </Link>
              </Text>
            ))}
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
