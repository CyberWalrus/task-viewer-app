// @flow
import { useState } from 'react';

type ReturnValues = {
  handleSubmit: (event: Event) => void,
  handleInputChange: (
    event: | SyntheticInputEvent<HTMLInputElement>
      | SyntheticInputEvent<HTMLTextAreaElement>
      | SyntheticInputEvent<HTMLSelectElement>,
  ) => void,
  inputs: { [string]: string },
};
const useTaskForm = (state: { [string]: string }, callback: ?() => void): ReturnValues => {
  const [inputs, setInputs] = useState<{ [string]: string }>(state);

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
    setInputs((values: { [string]: string }) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};

export default useTaskForm;
