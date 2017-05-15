import React from "react";
import Table from "./elements/Table";

const AccountView = ({account}) => {

  return (
  	<div className="well">
  		<h3>Selected Account</h3>
    	<Table accounts={[account]} />
    	<br />
    </div>
  );
};

export default AccountView;