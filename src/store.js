import { createStore } from "redux";

import todosReducer from "./ducks/todosReducer";

const store = createStore(todosReducer);

export default store;
