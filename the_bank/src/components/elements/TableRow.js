import React from "react";

const TableRow = ({col1, col2, onClick}) => (

	  <tr>
	    <td><a href="#" onClick={onClick}>{col1}</a></td>
	    <td>{col2}</td>
	  </tr>

);

export default TableRow;
