import React from "react";

function BoardItem({ board, index }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{board.b_title}</td>
      <td>{board.b_writer}</td>
      <td>{board.b_date}</td>
      <td>0</td>
    </tr>
  );
}

export default BoardItem;
