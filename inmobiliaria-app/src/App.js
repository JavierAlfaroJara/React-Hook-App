import "./App.css";
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import EstatesList from "./components/views/EstatesList";
import theme from "./theme/theme";

function App () {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <EstatesList />
      </ThemeProvider>
    </div>
  );
  
}

export default App;
