import React from 'react';

const Task = () => (
  <div className="task">
    <div className="task__header">
      <p className="task__id">1</p>
      <h3 className="task__title">Задача</h3>
      <button type="submit" className="task__btn-change" />
    </div>
    <div className="task__main">
      <p className="task__text">test</p>
      <p className="task__date">19.07.2019</p>
    </div>
  </div>
);

export default Task;
