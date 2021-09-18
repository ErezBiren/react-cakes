import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
