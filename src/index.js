import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux"; //Since Provider is not the default export of react-redux, you will need to surround Provider with curly brackets.Provider is a react component itself
import store from "./redux/store";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>
);
