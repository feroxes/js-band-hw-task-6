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

  handleChanges = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  clearState = () => {
    const initialState = {
      title: '',
      description: '',
      priority: '',
      isDone: false,
    };

    this.setState({ initialState });
  };

  createTask = () => {
    const { addTask, toggleModal } = this.props;
    addTask(this.state);
    this.clearState();
    toggleModal();
  };

  render() {
    const { modalTitle, isModalShown, toggleModal } = this.props;
    const { title, description, priority } = this.state;
    return (
      <div
        className={`modal-wrapper vw-100 vh-100 position-fixed overflow-auto justify-content-center align-items-center ${
          isModalShown ? 'd-flex' : 'd-none'
        }`}
      >
        <form className="base-modal w-25 rounded p-3">
          <h2 className="modal-title font-weight-bold">{modalTitle}</h2>
          <div className="add-item-form">
            <div className="my-3">
              <BaseInput
                label="Title:"
                placeholder="Title"
                value={title}
                name="title"
                id="title"
                handleChanges={this.handleChanges}
              />
            </div>
            <div className="my-3">
              <BaseTextArea
                id="description-area"
                label="Description:"
                name="description"
                value={description}
                placeholder="Enter description..."
                handleChanges={this.handleChanges}
              />
            </div>
            <div className="my-3">
              <BaseSelect
                label="Priority:"
                name="priority"
                value={priority}
                optionList={['Select an option', 'high', 'normal', 'low']}
                handleChanges={this.handleChanges}
              />
            </div>
            <div className="buttons-wrapper w-100 d-flex justify-content-between align-items-center my-2">
              <BaseButton
                text="Save"
                name="save-btn"
                handleClick={this.createTask}
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
  modalTitle: PropTypes.string.isRequired,
};

export default Modal;
