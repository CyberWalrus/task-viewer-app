// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { Task as TypeTask } from '../../constants/task';
import type { State, Dispatch } from '../../store/store';
import { Operation } from '../../store/store';
import { status, taskStatus } from '../../constants/status';

type Props = {
  task: TypeTask,
  onOpenForm: (isOpen: boolean, id: number) => void,
};

const taskStyle = {
  NORMAL: '',
  IMPORTANT: 'task_type_important',
  VERY_IMPORTANT: 'task_type_very-important',
  ALERT: 'task_type_alert',
  COMPLETE: 'task_type_complete',
};
const getTaskStyle = (task: TypeTask): string => {
  let typeStyle = taskStyle.NORMAL;
  if (task.status === status.IMPORTANT) {
    typeStyle = taskStyle.IMPORTANT;
  }
  if (task.status === status.VERY_IMPORTANT) {
    typeStyle = taskStyle.VERY_IMPORTANT;
  }
  const time = new Date(task.dateTerm);
  if (time < Date.now()) {
    typeStyle = taskStyle.ALERT;
  }
  if (task.isComplete) {
    typeStyle = taskStyle.COMPLETE;
  }
  return typeStyle;
};

const Task = ({ task, onOpenForm }: Props) => (
  <div className={`task ${getTaskStyle(task)}`}>
    <div className="task__header">
      <p className="task__id">{task.id}</p>
      <h3 className="task__title">{task.name}</h3>
      <button
        type="button"
        className="task__btn-change"
        onClick={() => onOpenForm(true, task.id)}
      />
    </div>
    <div className="task__main">
      <p className="task__text">{task.text}</p>
      <p className="task__date">{task.dateTerm}</p>
      <p className="task__date">{task.dateEnd}</p>
    </div>
  </div>
);

const mapStateToProps = (state: State, ownProps: Props) => ownProps;
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onOpenForm: (isOpen: boolean, id: number): void => {
    dispatch(Operation.changeStateForm(isOpen, id));
  },
});

export { Task };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Task);
