// @flow
type TaskStatus = 'Все' | 'Обычная' | 'Важная' | 'Очень Важная';
const taskStatus: { [string]: TaskStatus } = {
  NORMAL: 'Обычная',
  IMPORTANT: 'Важная',
  VERY_IMPORTANT: 'Очень Важная',
};
const TASK_ALL: TaskStatus = 'Все';

const taskStatusFilter: { [string]: TaskStatus } = { TASK_ALL, ...taskStatus };

export { taskStatus, taskStatusFilter, TASK_ALL };
