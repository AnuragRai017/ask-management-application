import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function Task({ task, onUpdateTask, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const props = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
  });

  const handleUpdate = () => {
    onUpdateTask(task.id, editedTask);
    setIsEditing(false);
  };

  return (
    <animated.div style={props} className="task">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask.title}
            onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
          />
          <textarea
            value={editedTask.description}
            onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
          />
          <select
            value={editedTask.status}
            onChange={(e) => setEditedTask({ ...editedTask, status: e.target.value })}
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </>
      )}
    </animated.div>
  );
}

export default Task;
