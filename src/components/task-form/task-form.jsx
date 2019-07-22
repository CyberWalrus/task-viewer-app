// @flow
import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import type { Task } from '../../constants/task';
import type { State, Dispatch } from '../../store/store';
import useTaskForm from '../../hooks/use-task-form/use-task-form';
import TaskInput from '../task-input/task-input';
import {
  inputName, inputText, inputDateTerm, inputDateEnd,
} from '../../constants/input';
import { Operation } from '../../store/store';
import { getFormId, getTasks } from '../../store/selector';
import { taskStatus } from '../../constants/status';
import task from '../../constants/task';

type Props = {
  formId: number,
  tasks: Array<Task>,
  onSendTask: (task: Task) => void,
  onDeleteTask: (id: number) => void,
  onCloseForm: (isOpen: boolean) => void,
};

const TaskForm = ({
  onSendTask, formId, tasks, onDeleteTask, onCloseForm,
}: Props) => {
  const {
    inputs, handleInputChange, handleSelectChange, handleSubmit,
  } = useTaskForm(
    formId ? tasks.find(item => item.id === formId) : task,
    () => onSendTask(inputs),
  );

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="task-form__header">
        <div className="task-form__container-submit">
          <button type="submit" className="task-form__btn-submit">
            add
          </button>
        </div>
        <div className="task-form__container-delete">
          <button type="button" className="task-form__btn-delete" onClick={() => onDeleteTask(inputs.id)}>
            delete
          </button>
        </div>
        <h3 className="task-form__title">{formId ? `Задача №${formId}` : 'Новая Задача'}</h3>
        <div className="task-form__container-close">
          <button type="button" className="task-form__btn-close" onClick={() => onCloseForm(false)}>
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

const mapStateToProps = (state: State, ownProps: Props) => ({
  ...ownProps,
  formId: getFormId(state),
  tasks: getTasks(state),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSendTask: (value: Task): void => {
    dispatch(Operation.addTask(value));
  },
  onDeleteTask: (id: number): void => {
    dispatch(Operation.deleteTask(id));
  },
  onCloseForm: (isOpen: boolean): void => {
    dispatch(Operation.changeStateForm(isOpen));
  },
});

export { TaskForm };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskForm);
