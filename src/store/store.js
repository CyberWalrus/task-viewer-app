// @flow
const taskStatus = {
  NORMAL: 'Обычная',
  IMPORTANT: 'Важная',
  VERY_IMPORTANT: 'Очень Важная',
};
export type Task = {
  id: number,
  name: string,
  status: $Keys<typeof taskStatus>,
  dateNeedEnd: Date,
  dateEnd: Date,
};
export type InitialState = {
  tasks: Array<Task>,
};

const ActionType = {
  ADD_TASK: 'ADD_TASK',
  CHANGE_TASK: 'CHANGE_TASK',
  DELETE_TASK: 'DELETE_TASK',
};

type AddTask = { type: typeof ActionType.ADD_TASK, payload: Task };
type ChangeTask = { type: typeof ActionType.CHANGE_TASK, payload: Task };
type Action = AddTask | ChangeTask;

const initialState: InitialState = {
  tasks: [],
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
};

const reducer = (state: InitialState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_TASK:
      return { ...state, tasks: action.payload };

    case ActionType.CHANGE_TASK:
      return Object.assign({}, state, {
        playFilmId: action.payload,
      });
    default:
      return state;
  }
};

export { ActionCreator, ActionType, reducer };
