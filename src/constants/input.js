// @flow
type OptionInput = {
  title: string,
  type: string,
  cssClass: string,
  name: string,
};
const inputName: OptionInput = {
  title: 'Название',
  type: 'text',
  cssClass: 'task-form__input-text',
  name: 'name',
};
const inputText: OptionInput = {
  title: 'Описание',
  type: 'textarea',
  cssClass: 'task-form__input-text',
  name: 'text',
};
const inputDateTerm: OptionInput = {
  title: 'Дата срока',
  type: 'datetime-local',
  cssClass: 'task-form__input-date',
  name: 'dateTerm',
};
const inputDateEnd: OptionInput = {
  title: 'Дата выполнения',
  type: 'datetime-local',
  cssClass: 'task-form__input-date',
  name: 'dateEnd',
};
const inputIsComplete: OptionInput = {
  title: 'Выполнено',
  type: 'checkbox',
  cssClass: '',
  name: 'isComplete',
};

export {
  inputName, inputText, inputDateTerm, inputDateEnd, inputIsComplete,
};
