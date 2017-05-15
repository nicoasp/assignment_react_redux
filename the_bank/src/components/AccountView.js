import React from "react";
import Table from "./elements/Table";
import DepositForm from "./DepositForm";

const AccountView = ({account}) => {
  console.log("click", account);
  return (
    <div className="well">
      <h3>Selected Account</h3>
      <Table accounts={[account]} />
      <DepositForm />
      <br />
    </div>
  );
};

export default AccountView;
