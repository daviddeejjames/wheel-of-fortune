import React from 'react';
import styled from 'styled-components';

import Letter from '../Letter';

const GRID_ROW = 14;
const GRID_SIZE = GRID_ROW * 4;
const MAX_WORD_SIZE = GRID_ROW - 2;

const Wall = styled.div`
  display: grid;
  height: 600px;
  grid-gap: 5px;
  grid-template-columns: repeat(${GRID_ROW}, 1fr);
  background-color: black;
  border: 5px solid black;
`;

const Border = styled.div`
  width: 1200px;
  border: 20px solid darkgoldenrod;
`;

let counter = 0;
let character;

const placeLetter = word => {
  character = word.substring(counter, counter + 1);
  counter++;
};

const placeLetters = word =>
  [...Array(GRID_SIZE)].map((e, i) => {
    const letterPointer = Math.floor((GRID_ROW - word.length) / 2 + GRID_ROW);

    // Row One
    if (word.length < MAX_WORD_SIZE && i >= letterPointer && i < 27) {
      placeLetter(word);
    }

    if (character === ' ') {
      character = null;
    }

    return <Letter key={word + i} letter={character} />;
  });

const Grid = props => {
  const { word } = props;

  counter = 0;
  return (
    <Border>
      <Wall>{placeLetters(word)}</Wall>
    </Border>
  );
};

export default Grid;
