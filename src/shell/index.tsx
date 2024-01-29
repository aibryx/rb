import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { theme } from '@/styles/theme';

export const Shell = ({ children }: React.PropsWithChildren) => {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {children}
      </ChakraProvider>
    </Router>
  );
};
