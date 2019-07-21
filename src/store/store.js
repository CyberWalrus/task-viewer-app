// @flow
import {
  taskStatusFilter,
  typeof TASK_ALL as TaskStatus,
  taskStatus,
} from '../constants/task-status';

const ActionType = {
  SET_TASKS: 'SET_TASKS',
  SET_ISOPEN: 'SET_ISOPEN',
  SET_FILTER: 'SET_FILTER',
  INC_TASK_COUNT: 'INC_TASK_COUNT',
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
  taskCount: number,
  task: Task,
  form: {
    isAdd: boolean,
    isOpen: boolean,
  },
  filter: TaskStatus,
};

type SetTasks = { type: typeof ActionType.SET_TASKS, payload: Array<Task> };
type SetIsOpen = { type: typeof ActionType.SET_ISOPEN, payload: boolean };
type SetFilter = { type: typeof ActionType.SET_FILTER, payload: TaskStatus };
type IncrementTaskCount = { type: typeof ActionType.INC_TASK_COUNT };
type Action = SetTasks | SetIsOpen | SetFilter | IncrementTaskCount;

const initialState: InitialState = {
  tasks: [],
  taskCount: 0,
  task: {},
  form: {
    isAdd: true,
    isOpen: false,
  },
  filter: taskStatusFilter.TASK_ALL,
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
  setFilter: (value: TaskStatus): SetFilter => ({
    type: ActionType.SET_FILTER,
    payload: value,
  }),
  incrementTaskCount: (): IncrementTaskCount => ({
    type: ActionType.INC_TASK_COUNT,
  }),
};

const Operation = {
  addTask: (value: any) => (dispatch: any, _getState: () => InitialState): void => {
    const { tasks, taskCount } = _getState();
    const taskNew = tasks.slice(0);
    console.log(value);
    const task: Task = {
      id: taskCount + 1,
      name: 'test',
      text: 'test',
      status: taskStatus.NORMAL,
      dateTerm: new Date(),
      dateEnd: new Date(),
    };
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
