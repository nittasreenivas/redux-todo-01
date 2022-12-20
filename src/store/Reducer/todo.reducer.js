const initialState = {
  todos: []
};

const todosReducers = (state = initialState, action) => {
  if (action.type === "ADD_TASK") {
    return {
      ...state,
      todos: action.payload
    };
  }
  if (action.type === "HANDLE_DELETE") {
    let deleteTodo = state.todos.filter((item) => {
      return item.id !== action.payload;
    });
    return {
      ...state,
      todos: deleteTodo
    };
  }
  if (action.type === "HANDLE_DONE") {
    let handleDone = state.todos.map((item) => {
      if (item.id === action.payload) {
        return { ...item, status: true };
      }
    });
    return {
      ...state,
      todos: handleDone
    };
  }
  if (action.type === "HANDLE_UNDO") {
    let handleDone = state.todos.map((item) => {
      if (item.id === action.payload) {
        return { ...item, status: false };
      }
    });
    return {
      ...state,
      todos: handleDone
    };
  }
  return state;
};

export default todosReducers;
