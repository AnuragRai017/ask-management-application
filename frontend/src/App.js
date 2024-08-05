// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetchTasks();
  }, [filter]);

  const fetchTasks = async () => {
    try {
      const url = filter === 'All' 
        ? 'http://localhost:5000/api/tasks'
        : `http://localhost:5000/api/tasks?status=${filter}`;
      const response = await axios.get(url);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (task) => {
    try {
      await axios.post('http://localhost:5000/api/tasks', task);
      fetchTasks();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const updateTask = async (id, updatedTask) => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${id}`, updatedTask);
      fetchTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <div>
        <label htmlFor="filter">Filter by status: </label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <TaskList
        tasks={tasks}
        onUpdateTask={updateTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
