import "./styles.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Todo from "./Components/Todo";
export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo />
      </div>
    </Provider>
  );
}
