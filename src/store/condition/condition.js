const initialState = {
  task: 0,
};

const ActionType = {
  ADD_TASK: 'ADD_TASK',
  CHANGE_TASK: 'CHANGE_TASK',
  DELETE_TASK: 'DELETE_TASK',
};

const ActionCreator = {
  addTask: task => ({
    type: ActionType.ADD_TASK,
    payload: task,
  }),
  changeTask: task => ({
    type: ActionType.CHANGE_TASK,
    payload: task,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return Object.assign({}, state, {
        genreSelected: action.payload,
      });

    case ActionType.SET_PLAY_FILM:
      return Object.assign({}, state, {
        playFilmId: action.payload,
      });
    default:
      return state;
  }
};

export { ActionCreator, ActionType, reducer };
