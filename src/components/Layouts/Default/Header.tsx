import {
  Container,
  Text,
  Button,
  Flex,
  Spacer,
  VStack,
  IconButton,
  MenuButton,
  MenuItem,
  MenuList,
  Menu,
  Box,
} from '@chakra-ui/react';

import { MapPin as MapIcon, Phone as PhoneIcon, Menu as MenuIcon } from 'lucide-react';

import { NAV_ITEMS } from '@/consts/navigate';
import { Logo } from './Logo';

import { Link } from 'react-router-dom';
import { useModal } from '@/store/store';

export const Header = () => {
  const { onOpen } = useModal();
  return (
    <header>
      <Container maxW="container.lg">
        <Flex alignItems="center">
          <Flex alignItems="center">
            <Box display={{ base: 'flex', lg: 'none' }}>
              <Menu>
                <MenuButton
                  display="flex"
                  justifyContent="flex-start"
                  as={IconButton}
                  aria-label="Options"
                  icon={<MenuIcon size={30} />}
                  variant="soft"
                  color="brand.500"
                />

                <MenuList
                  width="100vw"
                  height="100vh"
                  border="none"
                  borderRadius={0}
                  background="rgba(69, 146, 127, 0.9)"
                  py={10}
                >
                  <Container maxW="container.lg">
                    <ul>
                      {NAV_ITEMS.map((item) => {
                        return (
                          <MenuItem key={item.to} background="parent">
                            <Link to={item.to}>
                              <Text color="#fff">{item.name}</Text>
                            </Link>
                          </MenuItem>
                        );
                      })}
                    </ul>
                    <MenuItem background="parent">
                      <Button
                        onClick={onOpen}
                        mt={10}
                        px={6}
                        variant="outlined"
                        borderRadius="999px"
                      >
                        Записаться на прием
                      </Button>
                    </MenuItem>
                  </Container>
                </MenuList>
              </Menu>
            </Box>

            <Logo />

            <VStack display={{ base: 'none', lg: 'flex' }} py={2} ml={4} spacing={0}>
              <Flex alignItems="center">
                <MapIcon size={15} /> <Text ml={1}>Ростов-на-Дону</Text>
              </Flex>
              <Text color="gray.600" ml={1}>
                ул. Ленина, 2Б
              </Text>
            </VStack>
          </Flex>

          <Spacer />

          <Flex display={{ base: 'none', lg: 'flex' }} alignItems="center">
            <Flex alignItems="center">
              <PhoneIcon size={20} />
              <Text fontSize="lg" ml={2}>
                +7(863) 000 00 00
              </Text>
            </Flex>
            <Button
              onClick={onOpen}
              fontSize="sm"
              fontWeight="sm"
              variant="solid"
              ml={4}
              px={6}
              rounded="999px"
            >
              Записаться на прием
            </Button>
          </Flex>

          <VStack display={{ base: 'flex', lg: 'none' }} py={2} ml={4} spacing={0}>
            <Flex alignItems="center">
              <Text ml={1} fontWeight="bold">
                +7(863) 000 00 00
              </Text>
            </Flex>
            <Text color="gray.600" ml={1}>
              Ростов-на-Дону
            </Text>
          </VStack>
        </Flex>
      </Container>
    </header>
  );
};
