import React, { useState } from "react";

function Board() {
  const [commuList, setCommuList] = useState([]);
  const commu_body = commuList.map((community) => {
    return (
      /*
      <tr>
        <td>{community.c_no}</td>
        <td>{community.c_title}</td>
        <td>{community.c_writer}</td>
        <td>{community.c_date}</td>
        <td>{community.c_count}</td>
      </tr>
	  */
      <tr>
        <td>1</td>
        <td>제목</td>
        <td>작성자</td>
        <td>날짜</td>
        <td>조회 수</td>
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
        {/* <tbody>{commu_body}</tbody> */}
        <tbody>
          <tr>
            <td>1</td>
            <td>제목</td>
            <td>작성자</td>
            <td>날짜</td>
            <td>조회 수</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Board;
