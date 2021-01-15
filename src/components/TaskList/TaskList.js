
import React from 'react';
import TaskListItem from '../TascListItem/TaskListItem';
import PropTypes from 'prop-types'
import './TaskList.css';

const TaskList = ({ tasks, onRemoveTask }) => (
  <ul className='TaskList'>
    {tasks.map(({ id, name,number}) => (
      <TaskListItem
        key={id}
        name={name}
        number={number}
     
        onRemove={() => onRemoveTask(id)}
       
      />
    ))}
  </ul>
);

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  onRemoveTask: PropTypes.func.isRequired
}

export default TaskList;