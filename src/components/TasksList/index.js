import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

function TasksList({ tasksList }) {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {tasksList.map((task, index) => {
        // eslint-disable-next-line react/no-array-index-key
        return <Task task={task} index={index} key={index} />;
      })}
    </div>
  );
}

TasksList.propTypes = {
  tasksList: PropTypes.instanceOf(Array).isRequired,
};
export default TasksList;
