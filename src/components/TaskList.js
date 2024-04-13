// TaskList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../actions/taskActions'; // Import editTask action
import "./TaskList.css";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [editedText, setEditedText] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditedText(text);
  };

  const handleSaveEdit = (id) => {
    dispatch(editTask(id, editedText));
    setEditingId(null);
    setEditedText('');
  };

  return (
    <div className="outer">
    <div className="inner">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editingId === task.id ? (
              <>
                <input
                  className='edit-text'
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <button className="savebtn"onClick={() => handleSaveEdit(task.id)}>Save</button>
              </>
            ) : (
              <>
                {task.text}
                <button className="editbtn" onClick={() => handleEdit(task.id, task.text)}>Edit</button>
                <button className="deletebtn" onClick={() => handleDelete(task.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default TaskList;
