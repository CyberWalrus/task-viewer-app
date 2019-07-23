// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { Task as TypeTask } from '../../constants/task';
import type { State, Dispatch } from '../../store/store';
import Task from '../task/task';
import { ActionCreator, DEFAULT_COUNT } from '../../store/store';
import { getTasksFiltered, getShowCount } from '../../store/selector';

type Props = {
  tasks: Array<TypeTask>,
  showCount: number,
  onShowMore: (value: number) => void,
};
const Content = ({ tasks, showCount, onShowMore }: Props) => (
  <section className="content">
    <h2 className="content__title">Задачи</h2>
    <div className="content__task-list">
      {tasks && tasks.map((item: TypeTask) => <Task key={`task-${item.id}`} task={item} />)}
    </div>
    <div className="content__show-more">
      <button
        type="button"
        className={`content__btn${showCount <= tasks.length ? '' : ' content__btn_hidden'}`}
        onClick={() => onShowMore(DEFAULT_COUNT)}
      >
        Показать ещё
      </button>
    </div>
  </section>
);

const mapStateToProps = (state: State, ownProps: Props) => ({
  ...ownProps,
  tasks: getTasksFiltered(state),
  showCount: getShowCount(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onShowMore: (value: number): void => {
    dispatch(ActionCreator.incrementShowCount(value));
  },
});

export { Content };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Content);
