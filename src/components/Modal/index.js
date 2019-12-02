import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

import BaseInput from '../ui/BaseInput';
import BaseTextArea from '../ui/BaseTextArea';
import BaseSelect from '../ui/BaseSelect';
import BaseButton from '../ui/BaseButton';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      priority: '',
      isDone: false,
    };
  }

  handleChanges = (value, name) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { title, isModalShown, toggleModal, addTask } = this.props;
    return (
      <div
        className={`modal-wrapper vw-100 vh-100 position-fixed overflow-auto justify-content-center align-items-center ${
          isModalShown ? 'd-flex' : 'd-none'
        }`}
      >
        <form className="base-modal w-25 rounded p-3">
          <h2 className="modal-title font-weight-bold">{title}</h2>
          <div className="add-item-form">
            <div className="my-3">
              <BaseInput
                label="Title:"
                placeholder="Title"
                name="title"
                id="title"
                handlerFromParent={this.handleChanges}
              />
            </div>
            <div className="my-3">
              <BaseTextArea
                id="description-area"
                label="Description:"
                name="description"
                placeholder="Enter description..."
                handlerFromParent={this.handleChanges}
              />
            </div>
            <div className="my-3">
              <BaseSelect
                label="Priority:"
                name="priority"
                disabledFirstElement
                optionList={['Select an option', 'high', 'normal', 'low']}
                handlerFromParent={this.handleChanges}
              />
            </div>
            <div className="buttons-wrapper w-100 d-flex justify-content-between align-items-center my-2">
              <BaseButton
                text="Save"
                name="save-btn"
                handleClick={() => addTask(this.state)}
                className="save-btn btn btn-light w-50 bg-success"
              />
              <BaseButton
                text="Cancel"
                name="cancel-btn"
                handleClick={toggleModal}
                className="cancel-btn btn btn-light w-50 bg-danger"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Modal.propTypes = {
  isModalShown: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Modal;
