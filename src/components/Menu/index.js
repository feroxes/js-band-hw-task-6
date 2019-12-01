import React, { Component } from 'react';
import BaseInput from '../ui/BaseInput';
import './Menu.scss';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      search: '',
    };
  }

  handleInput = (value, name) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <section className="menu-wrapper">
        <div className="d-flex justify-content-center align-items-center w-100 menu">
          <div className="input-wrapper position-relative">
            <BaseInput
              name="search"
              placeholder="Search by title"
              handlerFromParent={this.handleInput}
            />
          </div>
          <div className="select-wrapper">
            <select name="isDone" id="filter-status" className="base-select">
              <option value="all" selected>
                All
              </option>
              <option value="open">Open</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div className="select-wrapper">
            <select name="priority" id="filter-priority" className="base-select">
              <option value="all" selected>
                All
              </option>
              <option value="high">High</option>
              <option value="normal">Normal</option>
              <option value="low">Low</option>
            </select>
          </div>
          <button type="button" id="open-modal-btn" className="create-btn base-btn">
            Create
          </button>
        </div>
      </section>
    );
  }
}

export default Menu;
