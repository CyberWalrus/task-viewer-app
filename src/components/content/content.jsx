// @flow
import React from 'react';
import { connect } from 'react-redux';
import Task from '../task/task';
import { getTasks } from '../../store/selector';
import { initialState } from '../../store/store';

type Props = {
  tasks: typeof initialState.tasks,
};

const Content = ({ tasks }: Props) => (
  <section className="content">
    <h2 className="content__title">Задачи</h2>
    <div className="content__task-list">
      {tasks && tasks.map((item: typeof initialState.task) => <Task key={`task-${item.id}`} />)}
    </div>
    <div className="content__show-more">
      <button type="button" className="content__btn">
        more
      </button>
    </div>
  </section>
);

const mapStateToProps = (state: typeof initialState, ownProps: Props) => ({
  ...ownProps,
  tasks: getTasks(state),
});

export { Content };

export default connect(mapStateToProps)(Content);
