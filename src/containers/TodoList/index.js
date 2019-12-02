import React, { Component } from 'react';
import Menu from '../../components/Menu';
import Modal from '../../components/Modal';
import TasksList from '../../components/TasksList';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalShown: false,
      tasksList: [{ title: 'test', description: 'test', priority: 'test', isDone: false }],
    };
  }

  toggleModal = () => {
    this.setState(state => {
      return {
        isModalShown: !state.isModalShown,
      };
    });
  };

  addTask = task => {
    const { tasksList } = this.state;
    tasksList.push(task);
    this.setState({ tasksList });
  };

  render() {
    const { isModalShown, tasksList } = this.state;
    return (
      <>
        <Menu toggleModal={this.toggleModal} />
        <TasksList tasksList={tasksList} />
        <Modal
          isModalShown={isModalShown}
          title="Create new item"
          toggleModal={this.toggleModal}
          addTask={this.addTask}
        />
      </>
    );
  }
}

export default TodoList;
