import React from 'react';
import { ThemeProvider } from './theme-provider';

export const withCustomTheme = (Component, theme) => props => (
  <ThemeProvider theme={theme}>
    <Component {...props} />
  </ThemeProvider>
);
