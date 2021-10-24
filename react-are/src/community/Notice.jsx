import React from "react";
import { useHistory } from "react-router-dom";

function Notice() {
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
      </table>
      <div className="community">
        <button>글쓰기</button>
      </div>
    </div>
  );
}

export default Notice;
