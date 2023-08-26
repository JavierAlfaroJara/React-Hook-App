import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1D1CC9",
    },
    secondary: {
      main: "#A55EA7",
    },
  },
  fontFamily: "Roboto",
});

export default theme;