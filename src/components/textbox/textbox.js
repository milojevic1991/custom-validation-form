import React from 'react';

import styled from 'styled-components';

const TextboxMain = styled.textarea`
border-radius: 0;
background: #232536;
border: none;
border-bottom: 2px solid #3c3e4f;
width: 70%;
height:400px
color: #fff;
padding: 1rem 1rem;
margin: 1rem;
`;

const Textbox = ({ change, name, value, placeholder }) => {
  return (
    <TextboxMain
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={change}
    ></TextboxMain>
  );
};

export default Textbox;
