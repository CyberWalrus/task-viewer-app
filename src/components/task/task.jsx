// @flow
import React from 'react';
import type { Task as TypeTask } from '../../constants/task';

type Props = {
  task: TypeTask,
};
const Task = ({ task }: Props) => (
  <div className="task">
    <div className="task__header">
      <p className="task__id">{task.id}</p>
      <h3 className="task__title">{task.name}</h3>
      <button type="submit" className="task__btn-change" />
    </div>
    <div className="task__main">
      <p className="task__text">{task.text}</p>
      <p className="task__date">{task.dateTerm}</p>
      <p className="task__date">{task.dateEnd}</p>
    </div>
  </div>
);

export default Task;
