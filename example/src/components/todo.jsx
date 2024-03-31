import { useState } from 'react';
import { useChannel, StateRadio } from 'state-radio-react';

export const ToDo = () => {
  const [inputValue, setInputValue] = useState('');
  const { channels } = new StateRadio();

  const tasksChannel = channels.addChannel('tasks', []);
  const [tasks, setTasks] = useChannel(tasksChannel);

  // Subscribe to tasks changes
  tasksChannel.subscribe((tasks) => {
    // Update UI or trigger re-render
    console.log('Tasks Updated:', tasks);
    // console.log('Tasks 1:', tasks1);

    // console.log('channel:', tasksChannel);
  });

  // Action to add a task
  const addTask = (text) => {
    setTasks((tasks) => [...tasks, { text, completed: false }]);
  };

  // Action to toggle task completion
  const toggleTask = (index) => {
    setTasks((tasks) =>
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Add a channel for visibility filter
  const filterChannel = channels.addChannel('filter', 'all');

  // Action to set visibility filter
  const setFilter = (filter) => {
    filterChannel.setState(filter);
  };

  // Subscribe to filter changes
  filterChannel.subscribe((filter) => {
    // Update UI or trigger re-render based on filter
    console.log('Filter Updated:', filter);
    // setTasks1('someone entirely different!');
  });

  return (
    <div>
      <div className="flex-row">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {/* Filter selection */}
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="active">Active</option>
        </select>
        <button className="button" onClick={() => addTask(inputValue)}>
          add task
        </button>
      </div>
      {/* Render tasks based on state */}
      {tasks.map((task, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(index)}
          />
          <span>{task.text}</span>
        </div>
      ))}
    </div>
  );
};
