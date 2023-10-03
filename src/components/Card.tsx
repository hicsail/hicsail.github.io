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
  ChakraProvider,
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
        sx={{ textAlign: 'center !important' }}
        position="relative"
        margin="auto auto 20px auto"
        onClick={onOpen}
      >
        <Box backgroundColor="white">
          <Image
            src={imageHref}
            fallbackSrc="../../img/research/placeholder-research.jpg"
            alt="Card Image"
            boxSize="300px"
            objectFit="cover"
          />
        </Box>

        <Box p={5}>
          <Stack align="center">
            <Text
              fontSize="20px"
              fontWeight="600"
              fontFamily="Graphik,Helvetica,Arial,sans-serif !important"
              sx={{ textAlign: 'center !important' }}
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
      <ChakraProvider>
        {isOpen && (
          <Modal isOpen={isOpen} onClose={onClose} size="2xl">
            <ModalOverlay />
            <ModalContent
              padding="1rem"
              bg={useColorModeValue('#F6EBCC', '#C1982E')}
            >
              <ModalCloseButton />
              <ModalBody textAlign="center">
                <>
                  <Image
                    margin="20px 28px 7px 0px "
                    width="300px"
                    src={imageHref}
                    fallbackSrc="../../img/research/placeholder-research.jpg"
                    float="left"
                  />
                  <Box marginTop="20px" textAlign="justify" fontSize="15px">
                    <Text>{modalBody}</Text>
                    {metaDataPresentation && (
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
                    {metaDataPublication && (
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
                      <></>
                    ) : (
                      <div dangerouslySetInnerHTML={{ __html: pi }} />
                    )}
                  </Box>
                </>
              </ModalBody>
              <ModalFooter>
                <Button
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
        )}
      </ChakraProvider>
    </>
  );
};
