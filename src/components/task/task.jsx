// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { Task as TypeTask } from '../../constants/task';
import type { InitialState } from '../../store/store';
import { Operation } from '../../store/store';

type Props = {
  task: TypeTask,
  onOpenForm: (isOpen: boolean, id: number) => void,
};
const Task = ({ task, onOpenForm }: Props) => (
  <div className="task">
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

const mapStateToProps = (state: InitialState, ownProps: Props) => ownProps;
const mapDispatchToProps = dispatch => ({
  onOpenForm: (isOpen: boolean, id: number): void => {
    dispatch(Operation.changeStateForm(isOpen, id));
  },
});

export { Task };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Task);
