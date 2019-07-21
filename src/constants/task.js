// @flow
import type { TaskStatus } from './status';

export type Task = {
  id: number,
  name: ?string,
  text: ?string,
  status: TaskStatus,
  dateTerm: ?string,
  dateEnd: ?string,
};

const task: Task = {
  id: 0,
  name: '',
  text: '',
  status: 'NORMAL',
  dateTerm: '',
  dateEnd: '',
};

export default task;
