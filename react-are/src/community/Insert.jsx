import React, { useContext } from "react";
import moment from "moment";
import AreContext from "../context/CommunityContext";

function Insert() {
  const { board, setBoard, commuList, setCommuList } = useContext(AreContext);
  const changeInput = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setBoard({
      ...board,
      [name]: value,
      c_no: commuList.length,
      c_date: moment().format("YYYY[-]MM[-]DD"),
      c_time: moment().format("HH:mm:ss"),
      c_text: "",
    });
    // console.log(board);
  };

  const onClickSave = async () => {
    // setCommuList([...commuList, board]);
    // console.log("hi", commuList);

    const { c_no, c_date, c_time, c_text } = board;

    const response = await fetch("http://localhost:5000/board/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
      body: JSON.stringify(c_no, c_date, c_time, c_text),
    });

    if (response.ok) {
      const json = await response.json();
      alert(JSON.stringify(json));
      console.log(JSON.stringify(json));
    }
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
