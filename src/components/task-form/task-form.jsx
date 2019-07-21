// @flow
import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import type { Task } from '../../constants/task';
import type { InitialState } from '../../store/store';
import useTaskForm from '../../hooks/use-task-form/use-task-form';
import TaskInput from '../task-input/task-input';
import {
  inputName, inputText, inputDateTerm, inputDateEnd,
} from '../../constants/input';
import { Operation } from '../../store/store';
import { taskStatus } from '../../constants/status';
import task from '../../constants/task';

type Props = {
  onSendTask: (task: Task) => void,
};


const TaskForm = ({ onSendTask }: Props) => {
  const {
    inputs, handleInputChange, handleSelectChange, handleSubmit,
  } = useTaskForm(task, () => onSendTask(inputs));

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="task-form__header">
        <div className="task-form__container-submit">
          <button type="submit" className="task-form__btn-submit">
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
        <Select
          name="status"
          value={taskStatus.find(item => item.value === inputs.status)}
          onChange={(value: any) => handleSelectChange('status')(value)}
          options={taskStatus}
        />
      </div>
      <TaskInput option={inputDateTerm} value={inputs} onChangeValue={handleInputChange} />
      <TaskInput option={inputDateEnd} value={inputs} onChangeValue={handleInputChange} />
      <TaskInput option={inputText} value={inputs} onChangeValue={handleInputChange} />
    </form>
  );
};

const mapStateToProps = (state: InitialState, ownProps: Props) => ownProps;
const mapDispatchToProps = dispatch => ({
  onSendTask: (value: Task): void => {
    dispatch(Operation.addTask(value));
  },
});

export { TaskForm };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskForm);
