import React from "react";
import TableRow from "./TableRow";

const Table = ({headers, accounts}) => {
  const tableRows = accounts.map(account => {
    return <TableRow col1={account.id} col2={account.balance} />;
  });
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Balance</th>
        </tr>
      </thead>

      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
};

export default Table;
