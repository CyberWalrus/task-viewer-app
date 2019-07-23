// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { FilterStatus } from '../../constants/status';
import type { State, Dispatch } from '../../store/store';
import { ActionCreator, Operation } from '../../store/store';
import { filterStatus } from '../../constants/status';

type Props = {
  onChangeIsOpen: (value: boolean) => void,
  onChangeFilter: (value: FilterStatus) => void,
};
const Header = ({ onChangeIsOpen, onChangeFilter }: Props) => (
  <header className="page__header">
    <nav className="filter">
      <ul className="filter__list">
        {filterStatus.map(item => (
          <li key={`filter-${item.value}`} className="filter__item">
            <button
              type="button"
              className="filter__link"
              onClick={() => onChangeFilter(item.value)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
    <div className="add-task">
      <button type="submit" className="add-task__btn" onClick={(): void => onChangeIsOpen(true)}>
        <svg viewBox="0 0 448 448">
          <path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0" />
        </svg>
      </button>
    </div>
  </header>
);

const mapStateToProps = (state: State, ownProps: Props) => ownProps;
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onChangeIsOpen: (value: boolean): void => {
    dispatch(ActionCreator.setIsOpen(value));
  },
  onChangeFilter: (value: FilterStatus): void => {
    dispatch(Operation.changeFilter(value));
  },
});

export { Header };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
