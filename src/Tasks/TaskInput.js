import React, { useState } from 'react';

function TaskInput({ addTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      addTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter task"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary" onClick={handleAddTask}>Add</button>
    </div>
  );
}

export default TaskInput;
