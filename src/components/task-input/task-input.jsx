// @flow
import React, { useState } from 'react';

const TaskInput = () => {
  const [value, setValue] = useState('');
  const handleChangeValue = event => setValue(event.target.value);

  return (
    <div className="task-form__container">
      <input type="text" className="task-form__input-date" value={value} onChange={handleChangeValue} />
    </div>
  );
};

export default TaskInput;
