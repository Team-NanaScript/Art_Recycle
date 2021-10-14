import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AreContext from "../context/CommunityContext";

function Board() {
  const { commuList } = useContext(AreContext);

  const commu_body = commuList.map((community) => {
    return (
      <tr>
        <td>{community.c_no}</td>
        <td>{community.c_title}</td>
        <td>{community.c_writer}</td>
        <td>{community.c_date}</td>
        <td>0</td>
      </tr>
    );
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
