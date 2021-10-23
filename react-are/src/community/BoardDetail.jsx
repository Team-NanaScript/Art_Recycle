import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useCommuContext } from "../context/CommunityContextProvider";

function BoardDetail() {
  const { b_seq } = useParams();
  // console.log("b-seq", b_seq);

  const { boardDetail, setBoardDetail } = useCommuContext();

  const boardViewDetail = useCallback(async () => {
    const res = await fetch(`http://localhost:5000/board/detail/${b_seq}`);
    const result = await res.json();
    await setBoardDetail(result);
  });

  useEffect(boardViewDetail, []);
  // console.table(boardDetail);

  return (
    <>
      <div className="detail_view">
        <div>
          <label>제목</label>
          <input readOnly value={boardDetail.b_title} />
        </div>
        <div>
          <label>날짜</label>
          <input readOnly value={boardDetail.b_date} />
        </div>
        <div>
          <label>시간</label>
          <input readOnly value={boardDetail.b_time} />
        </div>
        <div>
          <label>작성자</label>
          <input readOnly value={boardDetail.b_writer} />
        </div>
        <div>
          <label>내용</label>
          <input readOnly value={boardDetail.b_content} />
        </div>
      </div>
      <div className="community detail_btn_list">
        <Link to="/board">
          <button>목록으로</button>
        </Link>
        <Link to="/board/update/${b_seq}">
          <button>수정하기</button>
        </Link>
        <Link to="/board/delete/${b_seq}">
          <button>삭제하기</button>
        </Link>
      </div>
      <div className="detail_reply">
        <div className="community reply_insert">
          <input></input>
          <button>등록</button>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default BoardDetail;
