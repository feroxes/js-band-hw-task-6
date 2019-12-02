import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

function TasksList({ tasksList, toggleTaskStatus, deleteTask }) {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {tasksList.map((task, index) => {
        return (
          <Task
            task={task}
            index={index}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            toggleTaskStatus={toggleTaskStatus}
            deleteTask={deleteTask}
          />
        );
      })}
    </div>
  );
}

TasksList.propTypes = {
  tasksList: PropTypes.instanceOf(Array).isRequired,
  toggleTaskStatus: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
export default TasksList;
