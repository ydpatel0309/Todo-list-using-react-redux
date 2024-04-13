// taskReducer.js

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [], // Retrieve tasks from local storage
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTasks = [...state.tasks, action.payload];
      localStorage.setItem('tasks', JSON.stringify(newTasks)); // Save tasks to local storage
      return {
        ...state,
        tasks: newTasks,
      };
    case 'DELETE_TASK':
      const updatedTasks = state.tasks.filter((task) => task.id !== action.payload.id);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Save tasks to local storage
      return {
        ...state,
        tasks: updatedTasks,
      };
    case 'EDIT_TASK':
      const editedTasks = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, text: action.payload.newText } : task
      );
      localStorage.setItem('tasks', JSON.stringify(editedTasks)); // Save tasks to local storage
      return {
        ...state,
        tasks: editedTasks,
      };
    default:
      return state;
  }
};

export default taskReducer;
