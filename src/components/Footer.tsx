import {
  Box,
  chakra,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image,
} from '@chakra-ui/react';
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkedAlt,
  FaTwitter,
} from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { ReactNode } from 'react';
import * as React from 'react';

export const FooterI = () => {
  return <Box as="footer"></Box>;
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('white', 'black')}
      rounded={'full'}
      w={[4, 8]}
      h={[4, 8]}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      color={useColorModeValue('black', 'white')}
      width="100%"
      height="80px"
      marginTop="60px"
    >
      <Box
        as={Stack}
        py={4}
        direction="row"
        spacing={4}
        justify="center"
        align="center"
        width="100%"
      >
        <Stack direction={'row'} spacing={6} align="center">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            boxSize="30px"
          >
            <Image src="../../../img/bu-logo.png" />
          </Box>
          <Text fontSize="20px">
            Boston University Rafik B. Hariri Institute for Computing and
            Computational Science & Engineering
          </Text>

          <SocialButton
            label={'location'}
            href={'https://maps.bu.edu/?id=647#!ct/'}
          >
            <FaMapMarkedAlt />
          </SocialButton>
          <SocialButton label={'Mail'} href={'mailto:hicsail@bu.edu'}>
            <GrMail />
          </SocialButton>
          <SocialButton label={'Twitter'} href={'https://twitter.com/hicsail'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton
            label={'LinkedIn'}
            href={'https://www.linkedin.com/company/bu-sail/mycompany/'}
          >
            <FaLinkedin />
          </SocialButton>
          <SocialButton label={'Github'} href={'https://github.com/hicsail'}>
            <FaGithub />
          </SocialButton>
        </Stack>
      </Box>
    </Box>
  );
}
