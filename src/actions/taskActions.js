// taskActions.js
export const addTask = (text) => ({
  type: 'ADD_TASK',
  payload: {
    id: Math.random().toString(36).substr(2, 9),
    text,
  },
});

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  payload: {
    id,
  },
});

export const editTask = (id, newText) => ({
  type: 'EDIT_TASK',
  payload: {
    id,
    newText,
  },
});
