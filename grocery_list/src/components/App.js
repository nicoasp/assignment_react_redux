import React, {Component} from "react";
import JumbotronFluid from "./elements/JumbotronFluid";
import ItemsListContainer from "../containers/ItemsListContainer";
import AddItemContainer from "../containers/AddItemContainer";



class App extends Component {
  render() {
    return (
      <div className="App">
        <JumbotronFluid heading="Groceries" lead="Buy Groceries, Please" />

        <ItemsListContainer />
        <hr />
        <AddItemContainer />
      </div>
    );
  }
}

export default App;
