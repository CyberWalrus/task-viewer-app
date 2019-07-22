// @flow
import type { State } from './store';
import type { Task } from '../constants/task';
import type { FilterStatus } from '../constants/status';
import { TASK_ALL } from '../constants/status';

const getIsOpen = (state: State): boolean => state.isOpen;
const getTasks = (state: State): Array<Task> => state.tasks;
const getFormId = (state: State): number => state.formId;
const getTasksFiltered = (state: State): Array<Task> => {
  const tasksNew = state.filter === TASK_ALL
    ? state.tasks.slice(0)
    : state.tasks.slice(0).filter((item: Task) => item.status === state.filter);
  if (tasksNew.length > state.showCount) {
    return tasksNew.slice(0, state.showCount);
  }
  return tasksNew;
};
const getFilter = (state: State): FilterStatus => state.filter;
const getIsVisibleButton = (state: State): boolean => state.showCount <= state.tasks.length;
export {
  getIsOpen, getTasksFiltered, getTasks, getFilter, getFormId, getIsVisibleButton,
};
