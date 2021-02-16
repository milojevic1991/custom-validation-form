import React from 'react';
import styled from 'styled-components';

const Btn = styled.input`
  border-radius: 10px;
  background: linear-gradient(to right, #711280, #530554);
  /* box-shadow: inset 14px 14px 28px #252525, inset -14px -14px 28px #1e1e1e; */
  border: none;
  width: 80%;
  color: #fff;
  padding: 1rem 1rem;
  margin: 1rem;
  cursor: pointer;
  transition: 0.2s all;
  &:hover {
    background: linear-gradient(to right, #711280, #3c053c);
  }
`;
const Button = ({ type, value, submit, name, placeholder }) => {
  return (
    <Btn
      type={type}
      name={name}
      value={value}
      onSubmit={submit}
      placeholder={placeholder}
    ></Btn>
  );
};

export default Button;
