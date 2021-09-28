import React from "react";
import moment from "moment";

function Insert({ board, setBoard, commuList, setCommuList }) {
  const changeInput = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setBoard({
      ...board,
      [name]: value,
      c_no: commuList.length,
      c_date: moment().format("YYYY[-]MM[-]DD"),
      c_time: moment().format("HH:mm:ss"),
    });
    // console.log(board);
  };

  const onClickSave = () => {
    setCommuList([...commuList, board]);
    console.log("hi", commuList);
  };

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
