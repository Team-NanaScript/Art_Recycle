import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router";
import { useCommuContext } from "../context/CommunityContextProvider";
// import CKEditor from "react-native-ckeditor";

function BoardInsert() {
  const { b_seq } = useParams();

  const { boardDetail, setBoardDetail, changeInput, onClickUpdate } =
    useCommuContext();

  const boardViewDetail = useCallback(async () => {
    const res = await fetch(`http://localhost:5000/board/detail/${b_seq}`);
    const result = await res.json();
    await setBoardDetail(result);
  });
  useEffect(boardViewDetail, []);
  console.table(boardDetail);

  return (
    <div className="detail_view board_insert">
      <div>
        <label>작성자</label>
        <input
          onChange={changeInput}
          name="b_writer"
          value={boardDetail.b_writer}
          type="text"
        />
      </div>
      <div>
        <label>제목</label>
        <input
          onChange={changeInput}
          name="b_title"
          value={boardDetail.b_title}
          type="text"
        />
      </div>
      <div>
        <label>내용</label>
        <input
          onChange={changeInput}
          name="b_content"
          value={boardDetail.b_content}
          type="text"
        />
      </div>
      <div className="community">
        <button data-id={boardDetail.b_seq} onClick={onClickUpdate}>
          수정
        </button>
      </div>
    </div>
  );
}

export default BoardInsert;
