// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { Task as TypeTask } from '../../constants/task';
import type { InitialState } from '../../store/store';
import Task from '../task/task';
import { getTasks } from '../../store/selector';

type Props = {
  tasks: Array<TypeTask>,
};

const Content = ({ tasks }: Props) => (
  <section className="content">
    <h2 className="content__title">Задачи</h2>
    <div className="content__task-list">
      {tasks && tasks.map((item: TypeTask) => <Task key={`task-${item.id}`} task={item} />)}
    </div>
    <div className="content__show-more">
      <button type="button" className="content__btn">
        more
      </button>
    </div>
  </section>
);

const mapStateToProps = (state: InitialState, ownProps: Props) => ({
  ...ownProps,
  tasks: getTasks(state),
});

export { Content };

export default connect(mapStateToProps)(Content);
