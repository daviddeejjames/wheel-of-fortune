import React from 'react';
import styled from 'styled-components';

import Letter from '../Letter';

const GRID_ROW = 14;
const GRID_SIZE = GRID_ROW * 4;

const gridColumns = [...Array(GRID_ROW)].map(() => '1fr ');

const Wall = styled.div`
  display: grid;

  height: 600px;
  grid-gap: 5px;
  grid-template-columns: ${gridColumns};
  background-color: black;
  border: 5px solid black;
`;

const Border = styled.div`
  border: 20px solid darkgoldenrod;
  width: 1200px;
`;

const createLetters = [...Array(GRID_SIZE)].map(() => <Letter />);

const Grid = () => {
  return (
    <Border>
      <Wall>{createLetters}</Wall>
    </Border>
  );
};

export default Grid;
