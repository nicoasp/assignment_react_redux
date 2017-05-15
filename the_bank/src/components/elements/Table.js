import React from "react";
import TableRow from "./TableRow";

const Table = ({accounts, onClick}) => {
  const tableRows = accounts.map(account => {
    return (
      <TableRow col1={account.id} col2={account.amount} onClick={onClick} />
    );
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
