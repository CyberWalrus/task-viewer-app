// @flow
import { useState } from 'react';

const useTaskForm = (callback: ?() => void) => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event: Event) => {
    if (event) {
      event.preventDefault();
    }
    if (callback) {
      callback();
    }
  };
  const handleInputChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    event.persist();
    setInputs(values => ({ ...values, [event.target.name]: event.target.value }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};

export default useTaskForm;
