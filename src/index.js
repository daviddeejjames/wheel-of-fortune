import React from 'react';
import ReactDOM from 'react-dom';

import styled, { createGlobalStyle } from 'styled-components';

import Grid from './components/Grid';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Fortune = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background: #ebebeb;
  align-items: center;
  justify-content: center;
`;

const Main = () => {
  return (
    <Fortune>
      <GlobalStyle />
      <Grid />
    </Fortune>
  );
};

ReactDOM.render(Main(), global.document.getElementById('root'));
