import React, { Component } from 'react';
import Menu from '../../components/Menu';
import Modal from '../../components/Modal';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalShown: false,
    };
  }

  toggleModal = () => {
    this.setState(state => {
      return {
        isModalShown: !state.isModalShown,
      };
    });
  };

  render() {
    const { isModalShown } = this.state;
    return (
      <>
        <Menu toggleModal={this.toggleModal} />
        <Modal isModalShown={isModalShown} title="Create new item" toggleModal={this.toggleModal} />
      </>
    );
  }
}

export default TodoList;
