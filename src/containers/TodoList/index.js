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

  updateTasksList = tasksList => {
    this.setState({ tasksList });
  };

  addTask = task => {
    const { tasksList } = this.state;
    tasksList.push(task);
    this.updateTasksList(tasksList);
  };

  toggleTaskStatus = index => {
    const { tasksList } = this.state;
    tasksList[index].isDone = !tasksList[index].isDone;
    this.updateTasksList(tasksList);
  };

  deleteTask = index => {
    const { tasksList } = this.state;
    tasksList.splice(index, 1);
    this.updateTasksList(tasksList);
  };

  render() {
    const { isModalShown, tasksList } = this.state;
    return (
      <>
        <Menu toggleModal={this.toggleModal} />
        <TasksList
          tasksList={tasksList}
          toggleTaskStatus={this.toggleTaskStatus}
          deleteTask={this.deleteTask}
        />
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
