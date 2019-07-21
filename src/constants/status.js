// @flow
export type TaskStatus = 'NORMAL' | 'IMPORTANT' | 'VERY_IMPORTANT';
export type FilterStatus = TaskStatus | 'TASK_ALL';
const taskStatus: Array<{ value: TaskStatus, label: string }> = [
  { value: 'NORMAL', label: 'Обычная' },
  { value: 'IMPORTANT', label: 'Важная' },
  { value: 'VERY_IMPORTANT', label: 'Очень Важная' },
];

const filterStatus: Array<{
  value: FilterStatus,
  label: string,
}> = [
  { value: 'TASK_ALL', label: 'Все' },
  { value: 'NORMAL', label: 'Обычная' },
  { value: 'IMPORTANT', label: 'Важная' },
  { value: 'VERY_IMPORTANT', label: 'Очень Важная' },
];

export { taskStatus, filterStatus };
