// @flow
import React from 'react';
import { connect } from 'react-redux';
import useTaskForm from '../useTaskForm/useTaskForm';
import TaskInput from '../task-input/task-input';
import {
  inputName, inputText, inputDateTerm, inputDateEnd,
} from '../../constants/input';
import {
  Operation,
  typeof initialState as InitialState,
  initialState,
} from '../../store/store';
import { taskStatus } from '../../constants/task-status';

type Props = {
  onSendTask: (task: typeof initialState.task | any) => void,
};

const TaskForm = ({ onSendTask }: Props) => {
  const { inputs, handleInputChange, handleSubmit } = useTaskForm(() => {
    onSendTask(inputs);
  });

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="task-form__header">
        <div className="task-form__container-submit">
          <button type="button" className="task-form__btn-submit" onClick={handleSubmit}>
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
        <select
          className="task-form__select-status"
          name="status"
          onChangeValue={handleInputChange}
        >
          {Object.keys(taskStatus).map((item: string) => (
            <option value={taskStatus[item]} key={`task-status-${item}`}>
              {taskStatus[item]}
            </option>
          ))}
        </select>
      </div>
      <TaskInput option={inputDateTerm} value={inputs} onChangeValue={handleInputChange} />
      <TaskInput option={inputDateEnd} value={inputs} onChangeValue={handleInputChange} />
      <TaskInput option={inputText} value={inputs} onChangeValue={handleInputChange} />
    </form>
  );
};

const mapStateToProps = (state: InitialState, ownProps: Props) => ownProps;
const mapDispatchToProps = dispatch => ({
  onSendTask: (value: any): void => {
    dispatch(Operation.addTask(value));
  },
});

export { TaskForm };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskForm);
