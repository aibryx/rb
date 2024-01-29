import { regExp } from '@/shared/regexp';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Flex,
  FormControl,
  Input,
  Button,
  Box,
  Text,
  Heading,
} from '@chakra-ui/react';

import { useState } from 'react';

interface ModalWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalWindow = ({ isOpen, onClose }: ModalWindowProps) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const [fullNameError, setFullNameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const validateForm = (fullName: string, phoneNumber: string, email: string) => {
    const fullNameError = !regExp.fullName.test(fullName);
    const phoneNumberError = !regExp.phoneNumber.test(phoneNumber);
    const emailError = !regExp.email.test(email);

    return { fullNameError, phoneNumberError, emailError };
  };

  const clearInputs = () => {
    setFullName('');
    setPhoneNumber('');
    setEmail('');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>,
    setErrorState: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setErrorState(false);
    setState(e.target.value);
  };

  const trySendForm = () => {
    const { fullNameError, phoneNumberError, emailError } = validateForm(
      fullName,
      phoneNumber,
      email
    );

    setFullNameError(fullNameError);
    setPhoneNumberError(phoneNumberError);
    setEmailError(emailError);

    if (fullNameError || phoneNumberError || emailError) {
      return;
    }

    alert(JSON.stringify({ fullName, phoneNumber, email }));

    clearInputs();
    onClose();
  };
  return (
    <Modal size="5xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="#45927FE5" />

      <ModalContent w="1740px">
        <ModalCloseButton />

        <ModalBody p={{ base: 10, lg: 16 }}>
          <Flex
            flexDirection={{ base: 'column', lg: 'row' }}
            justifyContent="center"
            alignItems="center"
          >
            <Box mr={{ base: 0, lg: 16 }} mb={{ base: 8, lg: 0 }}>
              <Heading color="#364844">Запишись на прием онлайн</Heading>
              <Text color="#364844" mt={2}>
                Администратор свяжется с вами через WhatsApp <br /> в течение дня и уточнит детали
              </Text>
            </Box>

            <Box>
              <FormControl>
                <Input
                  isInvalid={fullNameError}
                  focusBorderColor="#1FA181"
                  borderColor="#E1E1E1"
                  w={{ lg: 'md' }}
                  color="#868686"
                  placeholder="ФИО"
                  value={fullName}
                  onChange={(e) => handleChange(e, setFullName, setFullNameError)}
                />
                {/* <FormErrorMessage/> ?? */}
                {fullNameError && (
                  <Text color="red.500" fontSize="sm" mt={1}>
                    Введите корректное ФИО
                  </Text>
                )}
              </FormControl>

              <FormControl size="xl" mt={4}>
                <Input
                  isInvalid={phoneNumberError}
                  type="number"
                  w={{ lg: 'md' }}
                  borderColor="#E1E1E1"
                  focusBorderColor="#1FA181"
                  color="#868686"
                  placeholder="Номер телефона"
                  value={phoneNumber}
                  onChange={(e) => handleChange(e, setPhoneNumber, setPhoneNumberError)}
                />
                {phoneNumberError && (
                  <Text color="red.500" fontSize="sm" mt={1}>
                    Введите корректный номер телефона
                  </Text>
                )}
              </FormControl>

              <FormControl mt={4}>
                <Input
                  isInvalid={emailError}
                  borderColor="#E1E1E1"
                  focusBorderColor="#1FA181"
                  w={{ lg: 'md' }}
                  color="#868686"
                  placeholder="Электронная почта"
                  value={email}
                  onChange={(e) => handleChange(e, setEmail, setEmailError)}
                />
                {emailError && (
                  <Text color="red.500" fontSize="sm" mt={1}>
                    Введите корректный адрес электронной почты
                  </Text>
                )}
              </FormControl>
              <Button
                mt={4}
                w="100%"
                fontSize="sm"
                fontWeight="sm"
                variant="solid"
                px={6}
                rounded="999px"
                onClick={trySendForm}
              >
                Записаться на прием
              </Button>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
