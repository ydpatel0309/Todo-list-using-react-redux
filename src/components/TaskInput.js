import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions';
import './TaskInput.css'; // Import the CSS file

function TaskInput() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      dispatch(addTask(text));
      setText('');
    }
  };

  return (
    <>
    <div className="form-outer">
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          placeholder="Enter task..."
          value={text}
          onChange={handleInputChange}
        />
       
      <button className="submit-button" type="submit">Add Task</button>
      </form>
    </div>
    </div>

    </>
  );
}

export default TaskInput;
