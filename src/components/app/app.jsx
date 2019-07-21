// @flow
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getIsOpen } from '../../store/selector';
import Content from '../content/content';
import Header from '../header/header';
import Footer from '../footer/footer';
import TaskForm from '../task-form/task-form';

type Props = {
  isOpen: boolean,
};

const App = ({ isOpen }: Props) => (
  <Fragment>
    <Header />
    <main className="page-main">
      <Content />
    </main>
    <Footer />
    {isOpen ? <TaskForm /> : <Fragment />}
  </Fragment>
);

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  isOpen: getIsOpen(state),
});

export { App };

export default connect(mapStateToProps)(App);
