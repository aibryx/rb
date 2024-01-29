import { type ThemeConfig, extendTheme } from '@chakra-ui/react';
import '@fontsource/pt-sans-caption';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const colors = {
  brand: {
    500: '#1FA181',
  },
};
const fonts = {
  body: 'PT Sans Caption, sans-serif',
};
const components = {
  Button: {
    variants: {
      solid: {
        bg: '#0DBC91',
        color: '#fff',
        _hover: { bg: '#00D29F' },
      },
      outlined: {
        bg: '#fff',
        color: '#0DBC91',
        border: '1px solid #0DBC91',
        _hover: { bg: '#0DBC91', color: '#fff' },
      },
      outlinedArrow: {
        bg: '#fff',
        color: '#c1c1c1',
        _hover: { color: '#0DBC91' },
      },
    },
  },
};

export const theme = extendTheme({ config, colors, fonts, components });
