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
  Link,
  List,
  Stack,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import * as React from 'react';
import { OutsideLink } from '../types/types';
import { useEffect } from 'react';

interface Props {
  modalButtonText: string | undefined;
  modalHeader: string | undefined;
  modalBody: string | undefined;
  imageHref: string | undefined;
  modalButtonSubText: string | undefined;
  pi: React.ReactElement | null;
  metaDataPresentation?: Array<OutsideLink>;
  metaDataPublication?: Array<OutsideLink>;
}

export const Card: React.FC<Props> = ({
  modalButtonText,
  modalBody,
  imageHref,
  modalButtonSubText,
  pi,
  metaDataPresentation,
  metaDataPublication,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    console.log('the modal is changed, it is now: ', isOpen);
  }, [isOpen]);

  return (
    <>
      <Box
        w="255px"
        h="440px"
        rounded="20px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        mt={10}
        textAlign="center"
        position="relative"
        margin="auto auto 20px auto"
        onClick={onOpen}
      >
        <Image
          src={imageHref}
          fallbackSrc="../../img/research/placeholder-research.jpg"
          alt="Card Image"
          boxSize="300px"
          objectFit="cover"
        />
        <Box p={5}>
          <Stack align="center">
            <Text
              fontSize="20px"
              fontWeight="600"
              fontFamily="Graphik,Helvetica,Arial,sans-serif !important"
            >
              {modalButtonText}
            </Text>
            <Text
              fontSize="14px"
              fontFamily="Graphik,Helvetica,Arial,sans-serif !important"
            >
              {modalButtonSubText}
            </Text>
          </Stack>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent padding="1rem" bg={useColorModeValue('white', '#2a2e35')}>
          <ModalCloseButton />
          <ModalBody>
            <>
              <Image
                objectFit="cover"
                src={imageHref}
                fallbackSrc="../../img/research/placeholder-research.jpg"
              />
              <Text textStyle="paragraph" m="0">
                {modalBody}
              </Text>
              {metaDataPresentation ?? (
                <Text textStyle="paragraph" m="0">
                  Presentations
                </Text>
              )}
              {metaDataPresentation?.map(({ name, href }) => (
                <Text textStyle="paragraph" m="0" color="teal">
                  <Link as="a" href={href}>
                    {name}
                  </Link>
                </Text>
              ))}
              {metaDataPublication ?? (
                <Text textStyle="paragraph" m="0">
                  Publications
                </Text>
              )}
              <List>
                {metaDataPublication?.map(({ name, href }) => (
                  <Text textStyle="paragraph" m="0" color="green">
                    <Link as="a" href={href}>
                      {name}
                    </Link>
                  </Text>
                ))}
              </List>
              {pi == null ? (
                <Text textStyle="paragraph">{pi}</Text>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: pi }} />
              )}
            </>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="ghost"
              mr={3}
              onClick={onClose}
              textAlign="center"
              width="100%"
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
