// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { Task as TypeTask } from '../../constants/task';
import type { InitialState } from '../../store/store';
import Task from '../task/task';
import { ActionCreator, DEFAULT_COUNT } from '../../store/store';
import { getTasks, getIsVisibleButton } from '../../store/selector';

type Props = {
  tasks: Array<TypeTask>,
  isVisible: boolean,
  onShowMore: (value: number) => void,
};
const Content = ({ tasks, isVisible, onShowMore }: Props) => (
  <section className="content">
    <h2 className="content__title">Задачи</h2>
    <div className="content__task-list">
      {tasks && tasks.map((item: TypeTask) => <Task key={`task-${item.id}`} task={item} />)}
    </div>
    <div className="content__show-more">
      <button
        type="button"
        className={`content__btn${isVisible ? '' : ' content__btn_hidden'}`}
        onClick={() => onShowMore(DEFAULT_COUNT)}
      >
        Показать ещё
      </button>
    </div>
  </section>
);

const mapStateToProps = (state: InitialState, ownProps: Props) => ({
  ...ownProps,
  tasks: getTasks(state, true),
  isVisible: getIsVisibleButton(state),
});

const mapDispatchToProps = dispatch => ({
  onShowMore: (value: number): void => {
    dispatch(ActionCreator.incrementShowCount(value));
  },
});

export { Content };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Content);
