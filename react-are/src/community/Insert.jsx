import React from "react";

function Insert() {
  return (
    <div className="board_insert">
      <div>
        <label>작성 날짜</label>
        <input type="text" />
      </div>
      <div>
        <label>작성 시간</label>
        <input type="text" />
      </div>
      <div>
        <label>작성자</label>
        <input type="text" />
      </div>
      <div>
        <label>내용</label>
        <input type="text" />
      </div>
      <div>
        <button>저장</button>
      </div>
    </div>
  );
}

export default Insert;
