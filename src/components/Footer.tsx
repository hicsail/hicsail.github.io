import {
  Box,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Flex,
  Icon,
  Link,
} from '@chakra-ui/react';
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkedAlt,
  FaTwitter,
} from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import * as React from 'react';

type FooterLinkProps = {
  icon?: React.ElementType;
  href?: string;
  label?: string;
};

let texttheme = ['#E0533B', '#EBB54A', '#94ED6B', '#73A6FC'];

const FooterLink: React.FC<FooterLinkProps> = ({ icon, href, label }) => (
  <Link
    bg={useColorModeValue('white', '#121212')}
    display="inline-block"
    href={href}
    aria-label={label}
    isExternal
  >
    <Icon as={icon} color={texttheme[0]} fontSize="xl" />
  </Link>
);

const links = [
  {
    icon: FaMapMarkedAlt,
    label: 'location',
    href: 'https://maps.bu.edu/?id=647#!ct/',
  },
  {
    icon: GrMail,
    label: 'Mail',
    href: 'mailto:hicsail@bu.edu',
  },
  {
    icon: FaTwitter,
    label: 'Twitter',
    href: 'https://twitter.com/hicsail',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/bu-sail/mycompany/',
  },
  {
    icon: FaGithub,
    label: 'Github',
    href: 'https://github.com/hicsail',
  },
];

export default function Footer() {
  return (
    <Flex display="column" as="footer" m={12} justifyContent="center">
      <Flex alignItems="center">
        <Image
          src="../../../img/bu-logo.png"
          height="auto"
          maxWidth="60px"
          minWidth="40px"
          width="100%"
        />

        <Text
          fontSize={{ base: '1rem', md: '1.25rem' }}
          display="inline-block"
          ml="1rem"
        >
          Boston University Rafik B. Hariri Institute for Computing and
          Computational Science & Engineering
        </Text>
      </Flex>

      <Stack mt={4} direction="row" spacing={8} justify="center">
        {links.map((link) => (
          <FooterLink key={link.href} {...link} />
        ))}
      </Stack>
    </Flex>
  );
}
