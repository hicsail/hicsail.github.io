import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import * as React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import ToggleColorButton from '../ui/ToggleColorButton';

const texttheme = ['#E0533B', '#EBB54A', '#94ED6B'];

export default function NavigationBar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex width="100%" marginTop="30px" marginBottom="30px">
      <Flex
        width="100%"
        bg={useColorModeValue('white', 'black')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
          width="100%"
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex
          // flex={{ base: 1 }}
          // justify={{ base: 'center', md: 'start' }}
          justifyContent="space-between"
          // justifyContent="center"
          align="center"
          width="100%"
          marginLeft="0px"
        >
          {/* <Box boxSize="30px" objectFit="cover" marginRight="10px">
            <Image src="../../img/s_logo.png" />
          </Box> */}
          <Flex
            // textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
            display="flex"
            alignItems="center"
            fontWeight="normal"
            lineHeight="50px"
            fontSize="2em"
          >
            <Box
              boxSize="30px"
              objectFit="cover"
              marginRight="10px"
              marginBottom="5px"
            >
              <Image src="../../img/s_logo.png" />
            </Box>
            <Text>SAIL</Text>
            {/* SAIL */}
          </Flex>

          <Flex
            display={{ base: 'none', md: 'flex' }}
            ml={10}
            align="center"
            justify="flex-end"
            width="100%"
          >
            <DesktopNav />
            <ToggleColorButton></ToggleColorButton>
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Flex>
  );
}

const DesktopNav = () => {
  const texttheme = ['#E0533B', '#EBB54A', '#94ED6B'];
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                as={ReactRouterLink}
                to={navItem.href}
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'20px'}
                fontFamily="Karbon"
                // fontHeight="20px"
                fontWeight={500}
                color={useColorModeValue('gray.600', 'gray.200')}
                _hover={{
                  color:
                    texttheme[Math.floor(Math.random() * texttheme.length)],
                  textDecoration: 'none',
                }}
                // color: useColorModeValue('gray.800', 'white'),
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border="5px solid white"
                // boxShadow={'xl'}
                bg={useColorModeValue('white', 'black')}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      // _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{
              color: texttheme[Math.floor(Math.random() * texttheme.length)],
              // 'pink.400'
            }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          {/* <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} /> */}
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'black')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <ToggleColorButton></ToggleColorButton>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'HOME',
    href: '/',
  },
  {
    label: 'PEOPLE',
    href: '#',
    children: [
      {
        label: 'Current Members',
        href: '/currentMembers',
      },
      {
        label: 'Alumni',
        href: 'alumni',
      },
    ],
  },
  {
    label: 'RESEARCH',
    href: '#',
    children: [
      {
        label: 'Ongoing',
        href: 'ongoingresearch',
      },
      {
        label: 'Past',
        href: 'pastresearch',
      },
    ],
  },
  {
    label: 'PUBLICATIONS',
    href: '#',
    children: [
      {
        label: 'Presentations',
        href: 'presentations',
      },
      {
        label: 'Publications',
        href: 'publications',
      },
    ],
  },
  {
    label: 'JOIN',
    href: '/join',
  },
  {
    label: 'CONTACT',
    href: '/contact',
  },
];
function random(arg0: number, arg1: number): number {
  throw new Error('Function not implemented.');
}
