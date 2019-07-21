// @flow
import {
  taskStatusFilter,
  typeof TASK_ALL as TaskStatus,
  taskStatus,
} from '../constants/task-status';

const ActionType = {
  ADD_TASK: 'ADD_TASK',
  CHANGE_TASK: 'CHANGE_TASK',
  DELETE_TASK: 'DELETE_TASK',
  CHANGE_ISOPEN: 'CHANGE_ISOPEN',
  CHANGE_FILTER: 'CHANGE_FILTER',
};

type Task = {
  id: number,
  name: string,
  text: string,
  status: TaskStatus,
  dateTerm: ?Date,
  dateEnd: ?Date,
};
type InitialState = {
  tasks: Array<Task>,
  task: Task,
  form: {
    isAdd: boolean,
    isOpen: boolean,
  },
  filter: TaskStatus,
};

type AddTask = { type: typeof ActionType.ADD_TASK, payload: Task };
type ChangeTask = { type: typeof ActionType.CHANGE_TASK, payload: Task };
type ChangeIsOpen = { type: typeof ActionType.CHANGE_ISOPEN, payload: boolean };
type ChangeFilter = { type: typeof ActionType.CHANGE_FILTER, payload: TaskStatus };
type Action = AddTask | ChangeTask | ChangeIsOpen | ChangeFilter;

const initialState: InitialState = {
  tasks: [],
  task: {},
  form: {
    isAdd: true,
    isOpen: false,
  },
  filter: taskStatusFilter.TASK_ALL,
};

const ActionCreator = {
  addTask: (task: Task): AddTask => ({
    type: ActionType.ADD_TASK,
    payload: task,
  }),
  changeTask: (task: Task): ChangeTask => ({
    type: ActionType.CHANGE_TASK,
    payload: task,
  }),
  changeIsOpen: (value: boolean): ChangeIsOpen => ({
    type: ActionType.CHANGE_ISOPEN,
    payload: value,
  }),
  changeFilter: (value: TaskStatus): ChangeFilter => ({
    type: ActionType.CHANGE_FILTER,
    payload: value,
  }),
};

const Operation = {
  addTask: (value: any) => (dispatch: any): void => {
    console.log(value);
    const task: Task = {
      id: 1,
      name: 'test',
      text: 'test',
      status: taskStatus.NORMAL,
      dateTerm: new Date(),
      dateEnd: new Date(),
    };
    dispatch(ActionCreator.addTask(task));
  },
};

const reducer = (state: InitialState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_TASK:
      return { ...state, tasks: action.payload };
    case ActionType.CHANGE_TASK:
      return { ...state };
    case ActionType.CHANGE_ISOPEN:
      return { ...state, form: { isOpen: action.payload } };
    case ActionType.CHANGE_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export {
  ActionCreator, ActionType, reducer, initialState, Operation,
};
