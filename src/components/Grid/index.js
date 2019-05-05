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

const getStartingPoint = (word, rowNum) =>
  Math.floor((GRID_ROW - word.length) / 2 + GRID_ROW * rowNum);

const placeLetter = word => {
  character = word.substring(counter, counter + 1);
  counter++;
};

const placeLetters = word =>
  [...Array(GRID_SIZE)].map((e, i) => {
    const firstRowPoint = getStartingPoint(word, 1);

    if (word.length < MAX_WORD_SIZE && i >= firstRowPoint && i < 27) {
      // Fits on row one
      placeLetter(word);
    } else if (word.length > MAX_WORD_SIZE) {
      // Has to go over 2 rows
      const wordSplit = word.split(' ');
      const wordOne = wordSplit[0];
      const firstRowPointer = getStartingPoint(wordSplit[0], 1);
      let secondRowPoint = null;
      let wordTwo;

      if (wordSplit.length === 2) {
        // eslint-disable-next-line prefer-destructuring
        wordTwo = wordSplit[1];
        secondRowPoint = getStartingPoint(wordTwo, 2);
      } else if (wordSplit.length === 3) {
        wordTwo = `${wordSplit[1]} ${wordSplit[2]}`;
        secondRowPoint = getStartingPoint(`${wordTwo}`, 2);
      } else if (wordSplit.length > 3) {
        console.error('Your sentence is too damn long');
      }

      if (i >= firstRowPointer && i < 27) {
        placeLetter(wordOne);
      }

      if (i === secondRowPoint) {
        counter = 0;
      }

      if (i >= secondRowPoint && i < 41) {
        placeLetter(wordTwo);
      }
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
