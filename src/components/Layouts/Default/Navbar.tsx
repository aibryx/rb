import { Box, Container, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { NAV_ITEMS } from '@/consts/navigate';

export const Navbar = () => {
  return (
    <nav>
      <Box bg="brand.500" display={{ base: 'none', lg: 'flex' }} alignItems="center" py="3">
        <Container maxW="container.lg">
          <ul>
            <Flex mr="0">
              {NAV_ITEMS.map((nav) => {
                return (
                  <Link to={nav.to} key={nav.to}>
                    <Text pr="3" color="gray.50">
                      {nav.name}
                    </Text>
                  </Link>
                );
              })}
            </Flex>
          </ul>
        </Container>
      </Box>
    </nav>
  );
};
