import React, { useState } from 'react';

import Input from '../../components/input/input';
import Textbox from '../../components/textbox/textbox';
import Button from '../../components/button/button';
import styled from 'styled-components';
import Circle from '../../UI/Circle/circle';

import useForm from '../useForm';
import { validate } from '../form/validate';

const FormWrapp = styled.form`
  width: 500px;
  height: 700px;
  margin: 0 auto;
  background-color: #242637;
  border-radius: 42px;
  background: linear-gradient(145deg, #202232, #27293b);
  box-shadow: 5px 5px 25px #12131c, -5px -5px 19px #363952;
`;

const Form = () => {
  const { info, error, onTextChange, sumbitHandler } = useForm(
    afterSubmit,
    validate
  );

  //   const onTextChange = (e) => {
  //     const { value, name } = e.target;

  //     setInfo({
  //       ...info,
  //       [name]: value,
  //     });
  //   };

  function afterSubmit() {
    console.log('OTISAO REQUEST');
  }
  return (
    <FormWrapp noValidate onSubmit={sumbitHandler}>
      <Circle />
      <Input
        errorMsg={error.name}
        type="name"
        name="name"
        value={info.name}
        placeholder="Your Name"
        change={onTextChange}
      ></Input>
      <Input
        errorMsg={error.email}
        type="email"
        name="email"
        value={info.email}
        placeholder="Your email"
        change={onTextChange}
      ></Input>
      <Textbox
        name="msg"
        placeholder="Your message"
        value={info.msg}
        change={onTextChange}
      ></Textbox>
      <Button type="submit" name="button" value="Submit"></Button>
    </FormWrapp>
  );
};

export default Form;
