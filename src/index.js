import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import { ThemeProvider } from '@emotion/react';
import meuTheme from './theme/meuTheme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={meuTheme  }>
      <BrowserRouter>
        <Cabecalho />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/produto' element={<h1>Produto</h1>} />
          <Route path='/cadastrarproduto' element={<h1>Cadastrar</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
