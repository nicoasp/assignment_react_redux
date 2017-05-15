import React from "react";
import Table from "./elements/Table";
import DepositFormContainer from "../containers/DepositFormContainer";
import WithdrawFormContainer from "../containers/WithdrawFormContainer";
import TransferFormContainer from "../containers/TransferFormContainer";

const AccountView = ({account}) => {
  return (
    <div className="well">
      <h3>Selected Account</h3>
      <Table accounts={[account]} />
      <DepositFormContainer account={account} />
      <WithdrawFormContainer account={account} />
      <TransferFormContainer account={account} />
      <br />
    </div>
  );
};

export default AccountView;
