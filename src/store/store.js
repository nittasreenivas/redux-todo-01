import { createStore } from "redux";

import reducer from "./Reducer/reducer";

const store = new createStore(reducer);

export default store;
