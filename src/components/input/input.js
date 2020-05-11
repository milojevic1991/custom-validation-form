import React from 'react';
import styled from 'styled-components';

const Inputs = styled.input`
  border-radius: 0;
  background: #232536;
  border: none;
  border-bottom: 2px solid #3c3e4f;
  width: 70%;
  color: #fff;
  padding: 1rem 1rem;
  margin: 1rem;
`;

const Input = ({ type, value, change, text, name, placeholder, errorMsg }) => {
  return (
    <>
      {errorMsg ? <h4>{errorMsg}</h4> : null}
      <Inputs
        type={type}
        name={name}
        value={value}
        onChange={change}
        placeholder={placeholder}
      >
        {text}
      </Inputs>
    </>
  );
};

export default Input;
