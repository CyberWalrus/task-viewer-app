// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { Task as TypeTask } from '../../constants/task';
import type { InitialState } from '../../store/store';
import Task from '../task/task';
import { getTasks, getFilter } from '../../store/selector';
import type { FilterStatus } from '../../constants/status';
import { TASK_ALL } from '../../constants/status';

type Props = {
  tasks: Array<TypeTask>,
  filter: FilterStatus,
};

const Content = ({ tasks, filter }: Props) => (
  <section className="content">
    <h2 className="content__title">Задачи</h2>
    <div className="content__task-list">
      {tasks
        && tasks.map((item: TypeTask) => {
          if (filter === TASK_ALL || filter === item.status) {
            return <Task key={`task-${item.id}`} task={item} />;
          }
          return <React.Fragment key={`task-${item.id}`} />;
        })}
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
  filter: getFilter(state),
});

export { Content };

export default connect(mapStateToProps)(Content);
