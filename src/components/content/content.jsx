import React from 'react';
import Task from '../task/task';

const Content = () => (
  <section className="content">
    <h2 className="content__title">Задачи</h2>
    <div className="content__task-list">
      <Task />
    </div>
    <div className="content__show-more">
      <button type="button" className="content__btn">
        more
      </button>
    </div>
  </section>
);

export default Content;
