import React, { Component } from 'react';
import Menu from '../../components/Menu';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Menu />
      </>
    );
  }
}

export default TodoList;
