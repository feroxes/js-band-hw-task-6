import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Task.scss';

import BaseButton from '../../ui/BaseButton';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isControlsShown: false,
    };
  }

  toggleControls = () => {
    this.setState(state => {
      return {
        isControlsShown: !state.isControlsShown,
      };
    });
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const { task, index } = this.props;
    const { title, description, priority, isDone } = task;
    const { isControlsShown } = this.state;
    return (
      <div
        className={`task-item d-flex flex-column justify-content-between bg-light text-dark w-25 p-3 m-1 rounded ${
          isDone ? 'isDone' : null
        }`}
      >
        <h2 className="align-self-center font-weight-bold ">{title}</h2>
        <p>{description}</p>
        <div className="d-flex justify-content-between position-relative">
          <span className="p-2 border border-dark rounded">{priority}</span>
          <BaseButton
            className="p-2 border border-dark rounded"
            text=". . ."
            name="controls-btn"
            handleClick={this.toggleControls}
          />
          <ul
            className={`controls-list position-absolute py-2 px-3 bg-light border border-dark rounded ${
              isControlsShown ? 'd-block' : 'd-none'
            }`}
          >
            <li>Done</li>
            <li>Edit</li>
            <li>Delete</li>
          </ul>
        </div>
      </div>
    );
  }
}

Task.propTypes = {
  task: PropTypes.instanceOf(Object).isRequired,
  index: PropTypes.number.isRequired,
};
export default Task;
