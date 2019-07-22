// @flow
import type { InitialState } from './store';

const getIsOpen = (state: InitialState) => state.isOpen;
const getFormId = (state: InitialState) => state.formId;
const getTasks = (state: InitialState, isFilter: ?boolean = false) => {
  if (isFilter) {
    const tasksNew = state.tasks.slice(0);
    tasksNew.map(item => item.status || item.status === state.filter);
    if (tasksNew.length > state.showCount) {
      return tasksNew.slice(0, state.showCount);
    }
    return tasksNew;
  }
  return state.tasks;
};
const getFilter = (state: InitialState) => state.filter;
export {
  getIsOpen, getTasks, getFormId, getFilter,
};
