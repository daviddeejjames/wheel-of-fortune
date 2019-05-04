import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styled, { createGlobalStyle } from 'styled-components';
import Grid from './components/Grid';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Archivo Black', sans-serif;
  }
`;

const Fortune = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background: #ebebeb;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ResetButton = styled.button`
  margin-top: 2rem;
  padding: 10px 16px;
  color: white;
  background-color: black;
  font-size: 1rem;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
`;

class WheelOfFortune extends Component {
  constructor(props) {
    super(props);
    this.state = { word: this.pickRandomWord() };
  }

  pickRandomWord = () => {
    const WordList = [
      'Styled Components',
      'React',
      'UI Guild',
      'JavaScript',
      'Construct Kit',
      'EsLint',
      'Prettier',
      'Create React App',
      'REA Group'
    ];

    return WordList[Math.floor(Math.random() * WordList.length)];
  };

  setNewWord = () => {
    return this.setState({ word: this.pickRandomWord() });
  };

  render() {
    const { word } = this.state;
    console.log(word);
    return (
      <Fortune>
        <GlobalStyle />
        <Grid word={word} />
        <ResetButton onClick={this.setNewWord}>New Word</ResetButton>
      </Fortune>
    );
  }
}

ReactDOM.render(<WheelOfFortune />, global.document.getElementById('root'));
