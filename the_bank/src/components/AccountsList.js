import React from "react";
import Table from "./elements/Table";

const AccountsList = ({accounts, onClick}) => {
  return <Table accounts={accounts} onClick={onClick} />;
};

export default AccountsList;
