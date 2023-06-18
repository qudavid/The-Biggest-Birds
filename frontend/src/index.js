import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { deepmerge } from '@mui/utils';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import ToggleColorModeProvider from './utils/ToggleColorMode';
import App from './components/app';

ReactDom.render(
  <ToggleColorModeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ToggleColorModeProvider>,
  document.getElementById('root'),
);
