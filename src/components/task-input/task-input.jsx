// @flow
import React from 'react';

type Props = {
  option: {
    title: string,
    type: string,
    cssClass: string,
    name: string,
  },
  value: Object,
  onChangeValue: (event: SyntheticInputEvent<HTMLInputElement>) => void,
};
const TaskInput = ({ option, value, onChangeValue }: Props) => (
  <div className="task-form__container">
    {option.title}
    <input
      type={option.type}
      className={option.cssClass}
      name={option.name}
      value={value[option.name]}
      onChange={onChangeValue}
    />
  </div>
);

export default TaskInput;
