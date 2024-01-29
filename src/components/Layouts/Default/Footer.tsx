import { Box, Container, Flex, Spacer, Text } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import { Logo } from './Logo';

import { NAV_ITEMS } from '@/consts/navigate';

import {
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  Youtube as YoutubeIcon,
  Linkedin as LinkedinIcon,
} from 'lucide-react';

export const Footer = () => {
  const navList = NAV_ITEMS.map((nav) => {
    return (
      <Link to={nav.to} key={nav.to}>
        <Text p="3" color="gray.50">
          {nav.name}
        </Text>
      </Link>
    );
  });

  return (
    <footer>
      <Box background="#08664F" py={10}>
        <Container maxW="container.lg">
          <Flex alignItems={{ base: 'flex-start', lg: 'center' }}>
            <Box display={{ base: 'none', lg: 'block' }}>
              <Logo color="#fff" />
            </Box>

            <Flex display={{ lg: 'none' }}>
              <Logo color="#fff" />
              {navList}
            </Flex>
            <Spacer />

            <Flex display={{ base: 'none', lg: 'flex' }}>{navList}</Flex>

            <Spacer />

            <Flex gap={4}>
              <InstagramIcon color="#fff" />
              <TwitterIcon color="#fff" />
              <YoutubeIcon color="#fff" />
              <LinkedinIcon color="#fff" />
            </Flex>
          </Flex>
        </Container>
      </Box>
    </footer>
  );
};
