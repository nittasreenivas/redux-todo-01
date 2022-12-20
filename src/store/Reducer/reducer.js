import todosReducers from "./todo.reducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  todo: todosReducers
});

export default reducer;
