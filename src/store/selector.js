// @flow
import type { InitialState } from './store';

const getIsOpen = (state: InitialState) => state.isOpen;
const getFormId = (state: InitialState) => state.formId;
const getTasks = (state: InitialState) => state.tasks;
const getFilter = (state: InitialState) => state.filter;
export {
  getIsOpen, getTasks, getFormId, getFilter,
};
