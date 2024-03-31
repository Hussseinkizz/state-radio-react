import { useState, useEffect } from 'react';
import ReactHands from '../useReactContext';

export const ToDo2 = () => {
  const [inputValue, setInputValue] = useState('');
  const { useStore } = ReactHands();
  const [store, setStore] = useStore();

  // Action to add a task
  const addTask = (text) => {
    setStore((preveState) => ({
      ...preveState,
      tasks: [...preveState.tasks, { text, completed: false }],
    }));
  };

  // Action to toggle task completion
  const toggleTask = (index) => {
    setStore((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  // Action to set visibility filter
  const setFilter = (newFilter) => {
    setStore((prevState) => ({ ...prevState, filter: newFilter }));
  };

  useEffect(() => {
    // run any subscriptions or effects
    console.log('store changed:', store);
  }, [store]);

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
      {store.tasks ? (
        store.tasks.map((task, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            <span>{task.text}</span>
          </div>
        ))
      ) : (
        <p>No tasks yet!</p>
      )}
    </div>
  );
};
