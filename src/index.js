import { createRoot } from "react-dom/client";
import "../styles/index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
