import React, { Component } from 'react';
import Menu from '../../components/Menu';
import Modal from '../../components/Modal';
import TasksList from '../../components/TasksList';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalShown: false,
      tasksList: [
        {
          title: 'test',
          description: 'test',
          priority: 'normal',
          id: Number(new Date()),
          isDone: false,
        },
      ],
      editableTask: null,
    };
  }

  toggleModal = () => {
    this.setState(state => {
      return {
        isModalShown: !state.isModalShown,
      };
    });
  };

  updateTasksList = tasksList => this.setState({ tasksList });

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

  updateTask = task => {
    const { tasksList } = this.state;
    tasksList.forEach((item, index) => {
      if (item.id === task.id) tasksList[index] = task;
    });
    this.updateTasksList(tasksList);
    this.setEditableTask();
  };

  setEditableTask = (editableTask = null) => this.setState({ editableTask });

  render() {
    const { isModalShown, tasksList, editableTask } = this.state;
    return (
      <>
        <Menu toggleModal={this.toggleModal} />
        <TasksList
          tasksList={tasksList}
          toggleTaskStatus={this.toggleTaskStatus}
          setEditableTask={this.setEditableTask}
          toggleModal={this.toggleModal}
          deleteTask={this.deleteTask}
        />
        {isModalShown && (
          <Modal
            modalTitle="Create new item"
            isModalShown={isModalShown}
            editableTask={editableTask}
            updateTask={this.updateTask}
            toggleModal={this.toggleModal}
            addTask={this.addTask}
          />
        )}
      </>
    );
  }
}

export default TodoList;
