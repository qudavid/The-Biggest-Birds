import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { deepmerge } from '@mui/utils';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import ToggleColorModeProvider from './utils/ToggleColorMode';
import App from './components/app';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#000000',
    },
  },
});

ReactDom.render(
  <ToggleColorModeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ToggleColorModeProvider>,
  document.getElementById('root'),
);
