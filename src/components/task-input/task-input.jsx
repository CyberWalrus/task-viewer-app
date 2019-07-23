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
    <label className="task-form__label" htmlFor={`task-${option.name}`}>
      {option.title}
    </label>
    {option.type === 'textarea' ? (
      <textarea
        id={`task-${option.name}`}
        className={option.cssClass}
        name={option.name}
        value={value[option.name]}
        onChange={onChangeValue}
      />
    ) : (
      <input
        id={`task-${option.name}`}
        type={option.type}
        className={option.cssClass}
        name={option.name}
        value={value[option.name]}
        onChange={onChangeValue}
      />
    )}
  </div>
);

export default TaskInput;
