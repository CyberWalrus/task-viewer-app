// @flow
import { useState } from 'react';

type ReturnValues = {
  handleSubmit: (event: Event) => void,
  handleInputChange: (
    event: | SyntheticInputEvent<HTMLInputElement>
      | SyntheticInputEvent<HTMLTextAreaElement>
      | SyntheticInputEvent<HTMLSelectElement>,
  ) => void,
  handleSelectChange: (
    name: string,
  ) => (optionSelected: {
    value: string,
    label: string,
  }) => void,
  inputs: { [string]: any },
};
const useTaskForm = (state: any, callback: ?() => void): ReturnValues => {
  const [inputs, setInputs] = useState(state);

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    if (callback) {
      callback();
    }
  };
  const handleInputChange = (event) => {
    event.persist();
    setInputs((values: { [string]: any }) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSelectChange = name => (optionSelected) => {
    const { value } = optionSelected;
    setInputs((values: { [string]: any }) => ({
      ...values,
      [name]: value,
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    handleSelectChange,
    inputs,
  };
};

export default useTaskForm;
