import React from "react";
import Table from "./elements/Table";

const AccountsList = ({accounts}) => {

  return (
    <Table accounts={accounts} />
  );
};

export default AccountsList;