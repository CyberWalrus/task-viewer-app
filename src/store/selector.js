// @flow
import type { InitialState } from './store';

const getIsOpen = (state: InitialState) => state.form.isOpen;
const getTasks = (state: InitialState) => state.tasks;
export { getIsOpen, getTasks };
