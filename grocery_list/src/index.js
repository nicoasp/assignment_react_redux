import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import {Provider} from 'react-redux'

// Import the createStore method from Redux
import {createStore} from "redux";

import {groceryApp} from "./reducers";

const itemsFromSeed = [
  {
    id: 1,
    name: "cheese",
    description: "beautiful parmesan",
    amount: 10,
    category: "Dairy",
    purchased: false
  },
  {
    id: 2,
    name: "chocolate",
    description: "beautiful but not parmesan",
    amount: 3,
    category: "Sweets",
    purchased: false
  }
]


let store = createStore(groceryApp, {
  items: itemsFromSeed,
})


ReactDOM.render(
  <Provider store={store}> 
    <App /> 
  </Provider>,
  document.getElementById("root")
);
