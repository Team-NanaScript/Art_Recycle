import React from "react";

function Board({ commuList }) {
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
        <button>글쓰기</button>
      </div>
    </div>
  );
}

export default Board;
