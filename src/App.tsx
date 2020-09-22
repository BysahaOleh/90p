import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { client } from './utils/apollo';

import { theme } from './utils/theme';

// Just for example (in real project router is used)
import Home from './pages/Home';

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
