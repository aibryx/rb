import { Link } from 'react-router-dom';
import { Text } from '@chakra-ui/react';

export const Logo = ({ color }: { color?: string }) => {
  return (
    <Link to="/">
      <Text
        pr="3"
        color={color ? color : 'brand.500'}
        fontSize={{ base: '2xl', lg: '3xl' }}
        fontWeight="bold"
      >
        LOGO
      </Text>
    </Link>
  );
};
