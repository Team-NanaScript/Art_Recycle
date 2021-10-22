import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useCommuContext } from "../context/CommunityContextProvider";
import BoardItem from "./BoardItem";

function Board() {
  const { commuList } = useCommuContext();

  const commu_body = commuList.map((board, index) => {
    return <BoardItem board={board} index={index} key={board.b_seq} />;
  });

  const history = useHistory();
  const btn_write = () => {
    history.push("/board/insert");
  };

  return (
    <div>
      <table className="com_board">
        <thead>
          <tr>
            <th>NO.</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
            <th>조회 수</th>
          </tr>
        </thead>
        <tbody>{commu_body}</tbody>
      </table>
      <div>
        <button onClick={btn_write}>글쓰기</button>
      </div>
    </div>
  );
}

export default Board;
