import React, { Component } from 'react';
import BaseInput from '../ui/BaseInput';
import BaseSelect from '../ui/BaseSelect';
import BaseButton from '../ui/BaseButton';

import './Menu.scss';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      search: '',
      // eslint-disable-next-line react/no-unused-state
      isDone: '',
      // eslint-disable-next-line react/no-unused-state
      priority: '',
    };
  }

  handleChanges = (value, name) => {
    this.setState({
      [name]: value,
    });
  };

  handleClick = e => {
    console.log('-----> e<-----', e);
  };

  render() {
    return (
      <section className="menu-wrapper">
        <div className="d-flex justify-content-center align-items-center w-100 menu">
          <div className="input-wrapper position-relative">
            <BaseInput
              id="search-input"
              name="search"
              placeholder="Search by title"
              handlerFromParent={this.handleChanges}
            />
          </div>
          <div className="select-wrapper">
            <BaseSelect
              name="isDone"
              handlerFromParent={this.handleChanges}
              optionList={['all', 'open', 'done']}
            />
          </div>
          <div className="select-wrapper">
            <BaseSelect
              name="priority"
              handlerFromParent={this.handleChanges}
              optionList={['all', 'high', 'normal', 'low']}
            />
          </div>
          <BaseButton text="Create" name="create-btn" handleClick={this.handleClick} />
        </div>
      </section>
    );
  }
}

export default Menu;
