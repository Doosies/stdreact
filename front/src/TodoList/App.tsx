import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoHead from './TodoHead';
import TodoTemplate from './TodoTemplate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
      </TodoTemplate>
    </>
  );
}

export default App;