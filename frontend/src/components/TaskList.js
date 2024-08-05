// components/TaskList.js
import React from 'react';
import Task from './Task';

function TaskList({ tasks, onUpdateTask, onDeleteTask }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onUpdateTask={onUpdateTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;