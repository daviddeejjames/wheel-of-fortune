import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: transparent;
  font-size: 5.5rem;
  background-color: #3254c5;
  user-select: none;
  cursor: default;

  ${props =>
    props.letter &&
    css`
      background-color: white;
      font-weight: 900;
      text-transform: uppercase;
      line-height: 1px;
      transition: 1s color;
      cursor: pointer;
    `}

  ${props =>
    props.letter &&
    props.showLetter &&
    css`
      color: black;
    `}
`;

class Letter extends Component {
  constructor(props) {
    super(props);
    this.state = { showLetter: false };
  }

  setRevealLetter = () => {
    this.setState({ showLetter: true });
  };

  render() {
    const { letter } = this.props;
    const { showLetter } = this.state;

    return (
      <Card
        showLetter={showLetter}
        onClick={() => this.setRevealLetter()}
        letter={letter}
      >
        {letter}
      </Card>
    );
  }
}

export default Letter;
