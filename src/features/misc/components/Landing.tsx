import { useModal } from '@/store/store';

import {
  Box,
  Text,
  Image,
  Container,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Card,
  CardBody,
  Heading,
  Stack,
  Button,
  CardFooter,
  ListItem,
  UnorderedList,
  Flex,
} from '@chakra-ui/react';

import {
  Minus as MinusIcon,
  Plus as PlusIcon,
  MoveLeft as LeftIcon,
  MoveRight as RightIcon,
} from 'lucide-react';

import { useState } from 'react';

const FREQUENT_QUESTIONS = [
  {
    question: 'Заголовок часто задаваемого вопроса',
    answer:
      'Blandit et et ac non interdum odio tristique diam vestibulum. Velit in quis consequat lacus fringilla amet elementum pharetra massa. Morbi euismod nulla cras adipiscing tristique aliquet purus adipiscing.',
  },
  {
    question: 'Заголовок часто задаваемого вопроса 2',
    answer:
      'Enim lectus pretium pellentesque dignissim nam massa justo dolor. Lectus pharetra molestie ac urna lorem. Nibh et vestibulum ullamcorper elit.Это предложение должно здесь быть. Massa arcu volutpat blandit augue nibh nisl fames. Sodales pharetra nisi quis purus lacinia. Sapien cras posuere dolor tincidunt quis sed adipiscing. ',
  },
  {
    question: 'Заголовок часто задаваемого вопроса 3',
    answer:
      'Nunc mi purus semper quam. Tincidunt magna neque rutrum sollicitudin dui hendrerit sed. Ipsum fusce volutpat eu pretium morbi dictum et bibendum. Purus tellus sit vel sed amet commodo volutpat sed et. Nibh aliquam ornare fermentum consequat ultrices arcu. ',
  },
];

const CHECK_UP = [
  {
    name: 'Гормональный скрининг',
  },
  {
    name: 'Тестостерон',
  },
  {
    name: 'Свободный тестостерон',
  },
  {
    name: 'Глобулин, связывающий половые гормоны и другие ',
  },
];

const SLIDES = [{ title: 'CHECK-UP' }, { title: 'Анализ крови' }, { title: 'Помощь психолога' }];

export const Landing = () => {
  const { onOpen } = useModal();

  const [swiperPage, setSwiperPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const delay = 1000;

  const handleSwiperClick = (page: number) => {
    setIsAnimating(true);

    setTimeout(() => {
      if (page === 4) setSwiperPage(1);
      else if (page === 0) setSwiperPage(3);
      else setSwiperPage(page);

      setIsAnimating(false);
    }, delay);
  };

  return (
    <>
      <Box background="#F8FBFA">
        <Container maxW="container.lg">
          <Card
            borderRadius="0"
            direction={{ base: 'column-reverse', sm: 'row' }}
            overflow="hidden"
            variant="aoft"
          >
            <Stack>
              <CardBody
                p={0}
                pr={10}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Heading size="xl">Многопрофильная клиника для детей и взрослых</Heading>

                <Text py="2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua
                </Text>
              </CardBody>
            </Stack>

            <Image
              objectFit="cover"
              maxW={{ base: '100%', sm: '60%' }}
              src="https://resizer-1.napopravku.ru/fit?width=1000&height=800&type=webp&file=iblock%2Fcza%2Fswe%2Fczasweuubirfsdlxdiierq4i74uyw2ywgdn8p3r4.jpg"
              alt="Main landing photo"
            />
          </Card>
        </Container>
      </Box>

      <Container maxW="container.lg">
        <Box>
          <Text
            display="flex"
            justifyContent="center"
            alignItems="center"
            my="10"
            fontSize={{ base: '2xl', sm: '3xl' }}
            fontWeight="bold"
          >
            Часто задаваемые вопросы
          </Text>

          <Accordion allowToggle>
            {FREQUENT_QUESTIONS.map((item, index) => {
              return (
                <AccordionItem
                  key={index}
                  borderRadius="5px"
                  border="none"
                  my={6}
                  py={4}
                  background="#F8FBFA"
                >
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton>
                          <Text fontSize="lg" fontWeight="bold" as="span" flex="1" textAlign="left">
                            {item.question}
                          </Text>
                          {isExpanded ? (
                            <MinusIcon fontSize="12px" color="#0DBC91" />
                          ) : (
                            <PlusIcon fontSize="12px" color="#0DBC91" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              );
            })}
          </Accordion>
        </Box>

        <Card
          direction={{ base: 'column-reverse', sm: 'row' }}
          overflow="hidden"
          variant="outline"
          border="none"
          background="#E2F0EF"
        >
          <Stack>
            <CardBody
              borderRadius="5px"
              p={10}
              transform={isAnimating ? 'translateX(100%)' : 'translateX(0)'}
              opacity={isAnimating ? 0 : 1}
              transition="transform 1s, opacity 1s"
            >
              <Heading fontSize="4xl" size="md" transition="1s linear">
                {SLIDES[swiperPage - 1].title}
              </Heading>

              <Text fontSize="xl" pt="2">
                для мужчин
              </Text>

              <UnorderedList pl="0" py="2">
                {CHECK_UP.map((item, index) => {
                  return (
                    <ListItem pt={1} key={index}>
                      {item.name}
                    </ListItem>
                  );
                })}
              </UnorderedList>

              <Flex alignItems="center">
                <Text fontStyle="normal" fontSize="xl" fontWeight="600">
                  Всего 2800₽
                </Text>

                <Text color="#868686" fontStyle="normal" fontSize="md" fontWeight="400" pl={5}>
                  ̶3̶5̶0̶0̶₽̶
                </Text>
              </Flex>
            </CardBody>

            <CardFooter pb={10} pl={10}>
              <Button fontWeight="400" onClick={onOpen} mt={10} px={10} borderRadius="999px">
                Записаться
              </Button>

              <Button
                fontWeight="400"
                ml={3}
                mt={10}
                px={10}
                variant="outlined"
                borderRadius="999px"
              >
                Подробнее
              </Button>
            </CardFooter>
          </Stack>

          <Image
            objectFit="cover"
            maxW={{ base: '100%', sm: '50%' }}
            src="https://img.freepik.com/free-photo/doctor-working-at-the-table_1098-19725.jpg?w=1380&t=st=1706376269~exp=1706376869~hmac=c171d4be5390a40ba4589fb0801eff446485386d1e27b08480ff7febb6446d50"
            alt="doctor-working-at-the-table"
          />
        </Card>
        <Flex mt={4} mb={10} justifyContent="center" alignItems="center">
          <Button variant="outlinedArrow" onClick={() => handleSwiperClick(swiperPage - 1)}>
            <LeftIcon />
          </Button>

          <Text display="flex" px={4} fontSize="lg">
            {swiperPage} <Text color="#c0c0c0">/3</Text>
          </Text>

          <Button variant="outlinedArrow" onClick={() => handleSwiperClick(swiperPage + 1)}>
            <RightIcon />
          </Button>
        </Flex>
      </Container>
    </>
  );
};
