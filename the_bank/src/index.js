import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
// import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import {Provider} from "react-redux";

import {createStore} from "redux";

import {bankTransactions} from "./reducers";

// let store = createStore(bankTransactions);
//
// let unsubscribe = store.subscribe(() => {
//   // Log the new state to the console
//   console.log("new state", store.getState());
// });
//
// console.log("initial state", store.getState());
//
// const viewAccount = accountId => {
//   let account = store.getState().accounts.filter(account => {
//     return (account.id = accountId);
//   });
//   console.log(account);
// };
//
// store.dispatch(select(1));
//
// store.dispatch(
//   deposit({
//     accountId: 2,
//     amount: 27
//   })
// );
//
// store.dispatch(
//   filterTrans({
//     start: null,
//     end: null
//   })
// );
//
// store.dispatch(
//   withdraw({
//     accountId: 1,
//     amount: 500
//   })
// );
//
// store.dispatch(
//   deposit({
//     accountId: 2,
//     amount: 100
//   })
// );
//
// store.dispatch(
//   transfer({
//     from: 2,
//     to: 1,
//     amount: 5000
//   })
// );
//
// store.dispatch(
//   filterTrans({
//     start: null,
//     end: null
//   })
// );
//
// store.dispatch(
//   filterTrans({
//     start: Date.now() - 4,
//     end: null
//   })
// );
//
// unsubscribe();
let bankAccounts = [
  {
    id: 1,
    amount: 1000
  },
  {
    id: 2,
    amount: 10000
  },
  {
    id: 3,
    amount: 10001
  }
];

let store = createStore(bankTransactions, {
  items: bankAccounts
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
