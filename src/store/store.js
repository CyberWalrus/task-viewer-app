// @flow
import type { FilterStatus } from '../constants/status';
import type { Task } from '../constants/task';
import { TASK_ALL } from '../constants/status';

const ActionType = {
  SET_TASKS: 'SET_TASKS',
  SET_ISOPEN: 'SET_ISOPEN',
  SET_FILTER: 'SET_FILTER',
  INC_TASK_COUNT: 'INC_TASK_COUNT',
};

export type InitialState = {
  tasks: Array<Task>,
  taskCount: number,
  form: {
    isAdd: boolean,
    isOpen: boolean,
  },
  filter: FilterStatus,
};

type SetTasks = { type: typeof ActionType.SET_TASKS, payload: Array<Task> };
type SetIsOpen = { type: typeof ActionType.SET_ISOPEN, payload: boolean };
type SetFilter = { type: typeof ActionType.SET_FILTER, payload: FilterStatus };
type IncrementTaskCount = { type: typeof ActionType.INC_TASK_COUNT };
type Action = SetTasks | SetIsOpen | SetFilter | IncrementTaskCount;

const initialState: InitialState = {
  tasks: [],
  taskCount: 0,
  form: {
    isAdd: true,
    isOpen: false,
  },
  filter: TASK_ALL,
};

const ActionCreator = {
  setTasks: (tasks: Array<Task>): SetTasks => ({
    type: ActionType.SET_TASKS,
    payload: tasks,
  }),
  setIsOpen: (value: boolean): SetIsOpen => ({
    type: ActionType.SET_ISOPEN,
    payload: value,
  }),
  setFilter: (value: FilterStatus): SetFilter => ({
    type: ActionType.SET_FILTER,
    payload: value,
  }),
  incrementTaskCount: (): IncrementTaskCount => ({
    type: ActionType.INC_TASK_COUNT,
  }),
};

const Operation = {
  addTask: (value: Task) => (dispatch: any, _getState: () => InitialState): void => {
    const { tasks, taskCount } = _getState();
    const taskNew = tasks.slice(0);
    const task: Task = { ...value, id: taskCount + 1 };
    taskNew.push(task);
    dispatch(ActionCreator.incrementTaskCount());
    dispatch(ActionCreator.setTasks(taskNew));
  },
};

const reducer = (state: InitialState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_TASKS:
      return { ...state, tasks: action.payload };
    case ActionType.SET_ISOPEN:
      return { ...state, form: { isOpen: action.payload } };
    case ActionType.SET_FILTER:
      return { ...state, filter: action.payload };
    case ActionType.INC_TASK_COUNT:
      return { ...state, taskCount: state.taskCount + 1 };
    default:
      return state;
  }
};

export {
  ActionCreator, ActionType, reducer, initialState, Operation,
};
