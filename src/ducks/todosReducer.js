const initialState = {
  todos: ["get food", "wash car", "laundry", "cut grass", "haircut"]
};

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo
  };
}

export function deleteTodo(name) {
  return {
    type: DELETE_TODO,
    payload: name
  };
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: state.todos.concat(action.payload)
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter(e => !e.includes(action.payload))
        // todos: state.todos.splice(action.payload, 1)
      };
    default:
      return state;
  }
}
