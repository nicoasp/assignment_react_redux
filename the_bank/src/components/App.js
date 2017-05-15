import React, {Component} from "react";
import AccountsListContainer from "../containers/AccountsListContainer";
import AccountViewContainer from "../containers/AccountViewContainer"

class App extends Component {
  render() {
    return (
    	<div className="App container" >
    		<AccountViewContainer />
    		<AccountsListContainer />
    		
    	</div>
   	);
  }
}

export default App;
