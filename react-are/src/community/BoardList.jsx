import React, { useCallback, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCommuContext } from "../context/CommunityContextProvider";
import BoardItem from "./BoardItem";
import "../css/board.css";

function BoardList() {
  const { commuList, setCommuList } = useCommuContext();

  // 커뮤니티 리스트 fetch
  const commuFetch = useCallback(async () => {
    const res = await fetch("http://localhost:5000/board/list");
    const boardList = await res.json();
    console.log("커뮤니티 리스트", boardList);

    await setCommuList(boardList);
    // console.log("commuList", commuList);
  }, []);
  useEffect(commuFetch, [commuFetch]);

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
            <th>작성자</th>
            <th>제목</th>
            <th>날짜</th>
            <th>조회 수</th>
          </tr>
        </thead>
        <tbody>{commu_body}</tbody>
      </table>
      <div className="community">
        <button onClick={btn_write}>글쓰기</button>
      </div>
    </div>
  );
}

export default BoardList;
