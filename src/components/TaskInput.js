import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/taskActions";
import "./TaskInput.css"; // Import the CSS file

function TaskInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      dispatch(addTask(text));
      setText("");
    }
  };

  return (
    <>
      <div className="form-ot">
        <div className="form-outer">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="formfield">
                <input
                  type="text"
                  autocomplete="off"
                  name="text"
                  class="input"
                  placeholder="Enter Task"
                  value={text}
                  onChange={handleInputChange}
                ></input>
              </div>
              <div className="submitbtn">
                <button className="submit-button" type="submit">
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskInput;
