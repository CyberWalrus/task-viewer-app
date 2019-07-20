// @flow

const ActionType = {
  ADD_TASK: 'ADD_TASK',
  CHANGE_TASK: 'CHANGE_TASK',
  DELETE_TASK: 'DELETE_TASK',
  CHANGE_ISOPEN: 'CHANGE_ISOPEN',
};

const taskStatus = {
  NORMAL: 'Обычная',
  IMPORTANT: 'Важная',
  VERY_IMPORTANT: 'Очень Важная',
};

const ALL_TASK = 'Все';
type Task = {
  id: number,
  name: string,
  status: $Keys<typeof taskStatus>,
  dateNeedEnd: Date,
  dateEnd: Date,
};
type InitialState = {
  tasks: Array<Task>,
  form: {
    isAdd: boolean,
    isOpen: boolean,
  },
};

type AddTask = { type: typeof ActionType.ADD_TASK, payload: Task };
type ChangeTask = { type: typeof ActionType.CHANGE_TASK, payload: Task };
type ChangeIsOpen = { type: typeof ActionType.CHANGE_ISOPEN, payload: boolean };
type Action = AddTask | ChangeTask | ChangeIsOpen;

const initialState: InitialState = {
  tasks: [],
  form: {
    isAdd: true,
    isOpen: false,
  },
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
};

const reducer = (state: InitialState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_TASK:
      return { ...state, tasks: action.payload };

    case ActionType.CHANGE_TASK:
      return { ...state };
    case ActionType.CHANGE_ISOPEN:
      return { ...state, form: { isOpen: action.payload } };
    default:
      return state;
  }
};

export {
  ActionCreator, ActionType, reducer, initialState,
};
