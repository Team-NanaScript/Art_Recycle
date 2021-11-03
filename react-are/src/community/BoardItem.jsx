import React from "react";
import { useHistory } from "react-router";
import { useCommuContext } from "../context/CommunityContextProvider";

function BoardItem({ board, index }) {
  const history = useHistory();

  // 커뮤니티 리스트 -> 디테일
  const onTrClick = async (e) => {
    const b_seq = e.target.closest("tr").dataset.id;

    history.replace(`/board/detail/${b_seq}`);
  };

  return (
    <tr onClick={onTrClick} data-id={board.b_seq}>
      <td>{index + 1}</td>
      <td>{board.b_writer}</td>
      <td>{board.b_title}</td>
      <td>{board.b_date}</td>
      <td>0</td>
    </tr>
  );
}

export default BoardItem;
