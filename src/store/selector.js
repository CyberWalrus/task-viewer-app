// @flow
import type { State } from './store';
import type { Task } from '../constants/task';
import type { FilterStatus } from '../constants/status';
import { status } from '../constants/status';

const getIsOpen = (state: State): boolean => state.isOpen;
const getTasks = (state: State): Array<Task> => state.tasks;
const getFormId = (state: State): number => state.formId;
const getTasksFiltered = (state: State): Array<Task> => {
  const tasksNew = state.filter === status.TASK_ALL
    ? state.tasks.slice(0)
    : state.tasks.slice(0).filter((item: Task) => item.status === state.filter);
  if (tasksNew.length > state.showCount) {
    return tasksNew.slice(0, state.showCount);
  }
  return tasksNew;
};
const getFilter = (state: State): FilterStatus => state.filter;
const getShowCount = (state: State): number => state.showCount;
export {
  getIsOpen, getTasksFiltered, getTasks, getFilter, getFormId, getShowCount,
};
