import React from 'react';
import Router from './Router';
import { ReactQueryDevtools } from 'react-query/devtools';
import GlobalStyle from './Style/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './Style/Theme';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Router />
                <ReactQueryDevtools initialIsOpen={true} />
            </ThemeProvider>
        </>
    );
}

export default App;
