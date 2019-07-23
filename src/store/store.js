// @flow
import type { FilterStatus } from '../constants/status';
import type { Task } from '../constants/task';
import { status } from '../constants/status';

export const DEFAULT_COUNT = 4;
const ActionType = {
  SET_TASKS: 'SET_TASKS',
  SET_ISOPEN: 'SET_ISOPEN',
  SET_FILTER: 'SET_FILTER',
  SET_FORM_ID: 'SET_FORM_ID',
  INC_TASK_COUNT: 'INC_TASK_COUNT',
  INC_SHOW_COUNT: 'INC_SHOW_COUNT',
  RESET_SHOW_COUNT: 'SET_SHOW_COUNT',
};

export type State = {
  tasks: Array<Task>,
  taskCount: number,
  formId: number,
  isOpen: boolean,
  filter: FilterStatus,
  showCount: number,
};

type SetTasks = { type: typeof ActionType.SET_TASKS, payload: Array<Task> };
type SetIsOpen = { type: typeof ActionType.SET_ISOPEN, payload: boolean };
type SetFilter = { type: typeof ActionType.SET_FILTER, payload: FilterStatus };
type SetFormId = { type: typeof ActionType.SET_FORM_ID, payload: number };
type IncrementTaskCount = { type: typeof ActionType.INC_TASK_COUNT };
type IncrementShowCount = { type: typeof ActionType.INC_SHOW_COUNT, payload: number };
type ResetShowCount = { type: typeof ActionType.RESET_SHOW_COUNT };
type Action =
  | SetTasks
  | SetIsOpen
  | SetFilter
  | SetFormId
  | IncrementTaskCount
  | IncrementShowCount
  | ResetShowCount;
// eslint-disable-next-line
export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
type GetState = () => Object;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type PromiseAction = Promise<Action>;

const initialState: State = {
  tasks: [],
  taskCount: 0,
  formId: 0,
  isOpen: false,
  filter: status.TASK_ALL,
  showCount: DEFAULT_COUNT,
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
  setFormId: (value: number): SetFormId => ({
    type: ActionType.SET_FORM_ID,
    payload: value,
  }),
  incrementTaskCount: (): IncrementTaskCount => ({
    type: ActionType.INC_TASK_COUNT,
  }),
  incrementShowCount: (value: number): IncrementShowCount => ({
    type: ActionType.INC_SHOW_COUNT,
    payload: value,
  }),
  resetShowCount: (): ResetShowCount => ({
    type: ActionType.RESET_SHOW_COUNT,
  }),
};

const Operation = {
  takeTask: (value: Task): ThunkAction => (dispatch: Dispatch, _getState: () => State): void => {
    try {
      if (value.id === 0) {
        const { tasks, taskCount } = _getState();
        const taskNew = tasks.slice(0);
        const task: Task = { ...value, id: taskCount + 1 };
        taskNew.push(task);
        dispatch(ActionCreator.incrementTaskCount());
        dispatch(ActionCreator.setTasks(taskNew));
        dispatch(Operation.changeStateForm(false, 0));
      } else {
        const { tasks } = _getState();
        const taskNew = tasks.slice(0);
        dispatch(
          ActionCreator.setTasks(
            taskNew.map(
              (item: Task): Task => {
                if (value.id === item.id) {
                  return value;
                }
                return item;
              },
            ),
          ),
        );
        dispatch(Operation.changeStateForm(false, 0));
      }
    } catch (error) {
      dispatch(Operation.changeStateForm(false, 0));
    }
  },
  deleteTask: (id: number): ThunkAction => (dispatch: Dispatch, _getState: () => State): void => {
    const { tasks } = _getState();
    const taskNew = tasks.filter(item => item.id !== id);
    dispatch(ActionCreator.setTasks(taskNew));
    dispatch(Operation.changeStateForm(false, 0));
  },
  changeStateForm: (isOpen: boolean = true, id: ?number): ThunkAction => (
    dispatch: Dispatch,
  ): void => {
    if (id || id === 0) {
      dispatch(ActionCreator.setFormId(id));
    }
    dispatch(ActionCreator.setIsOpen(isOpen));
  },
  changeFilter: (filter: FilterStatus): ThunkAction => (dispatch: Dispatch): void => {
    dispatch(ActionCreator.setFilter(filter));
    dispatch(ActionCreator.resetShowCount());
  },
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_TASKS:
      return { ...state, tasks: action.payload };
    case ActionType.SET_ISOPEN:
      return { ...state, isOpen: action.payload };
    case ActionType.SET_FORM_ID:
      return { ...state, formId: action.payload };
    case ActionType.SET_FILTER:
      return { ...state, filter: action.payload };
    case ActionType.INC_TASK_COUNT:
      return { ...state, taskCount: state.taskCount + 1 };
    case ActionType.INC_SHOW_COUNT:
      return { ...state, showCount: state.taskCount + action.payload };
    case ActionType.RESET_SHOW_COUNT:
      return { ...state, showCount: DEFAULT_COUNT };
    default:
      return state;
  }
};

export {
  ActionCreator, ActionType, reducer, initialState, Operation,
};
