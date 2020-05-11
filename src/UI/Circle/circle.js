import React from 'react';
import styled from 'styled-components';

const CircleWrapp = styled.div`
  width: 150px;
  height: 150px;
  margin: 2rem auto;
  background-color: #fff;
  border-radius: 50%;
  background: #242637;
  box-shadow: inset 5px 5px 10px #1b1d2a, inset -5px -5px 10px #2d2f44;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 23px;
`;
const Circle = () => {
  return (
    <CircleWrapp>
      <h2>Hello</h2>
    </CircleWrapp>
  );
};

export default Circle;
