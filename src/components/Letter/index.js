import React from 'react';
import styled, { css } from 'styled-components';

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: transparent;
  font-size: 5.5rem;
  background-color: #3254c5;

  ${props =>
    props.letter &&
    css`
      background-color: white;
      font-weight: 900;
      text-transform: uppercase;
      color: black;
      line-height: 1px;
    `}
`;

const Letter = props => {
  const { letter } = props;
  return <Card letter={letter}>{letter}</Card>;
};

export default Letter;
