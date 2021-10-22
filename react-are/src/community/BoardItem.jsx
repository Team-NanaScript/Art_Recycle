import React from "react";
import { useCommuContext } from "../context/CommunityContextProvider";

function BoardItem({ board, index }) {
  const { onTrClick } = useCommuContext();
  return (
    <tr onClick={onTrClick} data-id={board.b_seq}>
      <td>{index + 1}</td>
      <td>{board.b_title}</td>
      <td>{board.b_writer}</td>
      <td>{board.b_date}</td>
      <td>0</td>
    </tr>
  );
}

export default BoardItem;
