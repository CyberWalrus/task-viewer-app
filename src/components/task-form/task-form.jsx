import React from 'react';
import TaskInput from '../task-input/task-input';

const TaskForm = () => (
  <form className="task-form">
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
    <div className="task-form__container">
      <input className="task-form__input-text" />
    </div>
    <div className="task-form__container">
      <select className="task-form__select-status">
        <option>Обычная</option>
        <option>Важная</option>
        <option>Очень важная</option>
      </select>
    </div>
    <div className="task-form__container">
      <input className="task-form__input-date" />
    </div>
    <div className="task-form__container">
      <input className="task-form__input-date" />
    </div>
    <div className="task-form__container">
      <textarea className="task-form__input-description" />
    </div>
    <TaskInput />
  </form>
);

export default TaskForm;
