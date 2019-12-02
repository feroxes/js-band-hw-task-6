import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BaseInput from '../ui/BaseInput';
import BaseSelect from '../ui/BaseSelect';
import BaseButton from '../ui/BaseButton';

import './Menu.scss';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      isDone: '',
      priority: '',
    };
  }

  handleChanges = (name, value) => {
    this.setState({
      [name]: value,
    });
    this.filterTasks(name, value);
  };

  filterTasks = (name, value) => {
    const { filterTasksList } = this.props;
    if (name === 'isDone' && value !== 'all') filterTasksList(name, value === 'done');
    else filterTasksList(name, value);
  };

  render() {
    const { toggleModal } = this.props;
    const { search, isDone, priority } = this.state;
    return (
      <section className="menu-wrapper">
        <div className="d-flex justify-content-center align-items-center w-100 menu">
          <div className="input-wrapper position-relative">
            <BaseInput
              id="search-input"
              name="search"
              value={search}
              placeholder="Search by title"
              handleChanges={this.handleChanges}
            />
          </div>
          <div className="select-wrapper">
            <BaseSelect
              name="isDone"
              value={isDone}
              handleChanges={this.handleChanges}
              optionList={['all', 'open', 'done']}
            />
          </div>
          <div className="select-wrapper">
            <BaseSelect
              name="priority"
              value={priority}
              handleChanges={this.handleChanges}
              optionList={['all', 'high', 'normal', 'low']}
            />
          </div>
          <BaseButton
            text="Create"
            name="create-btn"
            handleClick={toggleModal}
            className="btn btn-light"
          />
        </div>
      </section>
    );
  }
}

Menu.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  filterTasksList: PropTypes.func.isRequired,
};

export default Menu;
