// @flow
import React from 'react';
import useTaskForm from '../useTaskForm/useTaskForm';
import TaskInput from '../task-input/task-input';
import {
  inputName, inputText, inputDateTerm, inputDateEnd,
} from '../../constants/input';

const TaskForm = () => {
  const { inputs, handleInputChange, handleSubmit } = useTaskForm();
  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="task-form__header">
        <div className="task-form__container-submit">
          <button type="button" className="task-form__btn-submit">
            add
          </button>
        </div>
        <div className="task-form__container-delete">
          <button type="button" className="task-form__btn-delete">
            delete
          </button>
        </div>
        <h3 className="task-form__title">Add task</h3>
        <div className="task-form__container-close">
          <button type="button" className="task-form__btn-close">
            close
          </button>
        </div>
      </div>
      <TaskInput option={inputName} value={inputs} onChangeValue={handleInputChange} />
      <div className="task-form__container">
        <select className="task-form__select-status">
          <option>Обычная</option>
          <option>Важная</option>
          <option>Очень важная</option>
        </select>
      </div>
      <TaskInput option={inputDateTerm} value={inputs} onChangeValue={handleInputChange} />
      <TaskInput option={inputDateEnd} value={inputs} onChangeValue={handleInputChange} />
      <TaskInput option={inputText} value={inputs} onChangeValue={handleInputChange} />
    </form>
  );
};

export default TaskForm;
