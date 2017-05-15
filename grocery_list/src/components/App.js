import React, {Component} from "react";
import JumbotronFluid from "./elements/JumbotronFluid";
import ItemsListContainer from "../containers/ItemsListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <JumbotronFluid heading="Groceries" lead="Buy Groceries, Please" />

        <ItemsListContainer />
      </div>
    );
  }
}

export default App;
