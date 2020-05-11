import React, { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [info, setInfo] = useState({ name: '', email: '', msg: '' });
  const [error, setError] = useState({});

  useEffect(() => {
    if (Object.keys(error).length === 0) {
      callback();
    }
  }, [error]);

  const onTextChange = (e) => {
    const { value, name } = e.target;

    setInfo({
      ...info,
      [name]: value,
    });
  };

  const sumbitHandler = (e) => {
    e.preventDefault();

    setError(validate(info));
    console.log('submit');
  };

  return {
    info,
    onTextChange,
    sumbitHandler,
    error,
  };
};

export default useForm;
