import React from "react";
import { useCommuContext } from "../context/CommunityContextProvider";

function Insert() {
  const { changeInput, onClickSave } = useCommuContext();

  return (
    <div className="board_insert">
      <div>
        <label>작성자</label>
        <input onChange={changeInput} name="c_writer" type="text" />
      </div>
      <div>
        <label>제목</label>
        <input onChange={changeInput} name="c_title" type="text" />
      </div>
      <div>
        <label>내용</label>
        <input onChange={changeInput} name="c_text" type="text" />
      </div>
      <div>
        <button onClick={onClickSave}>저장</button>
      </div>
    </div>
  );
}

export default Insert;
