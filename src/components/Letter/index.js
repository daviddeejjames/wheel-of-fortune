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
  position: relative;
  z-index: 10;
  cursor: default;

  ${props =>
    props.letter &&
    css`
      background-color: white;
      outline: 1px solid black;
      line-height: 1px;
      position: relative;
      transform-style: preserve-3d;
      text-transform: uppercase;
      font-weight: 900;
      transform: rotateY(180deg);
      transition: opacity 0.9s, color 1s 0.2s, transform 1s;
      cursor: pointer;

      &:before {
        position: absolute;
        content: '';
        transform: rotateY(90deg);
        width: 50%;
        height: 100%;
        background: white;
        position: absolute;
        top: 0;
        left: -25%;
      }

      &:after {
        position: absolute;
        content: '';
        transform: rotateY(180deg);
        width: 100%;
        height: 100%;
        background: white;
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
        opacity: 1;
      }
    `}

  ${props =>
    props.letter &&
    props.showLetter &&
    css`
      color: black;
      transform: rotateY(0deg);

      &:after {
        opacity: 0;
      }
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
