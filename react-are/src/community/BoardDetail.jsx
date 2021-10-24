import React, { useCallback, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useCommuContext } from "../context/CommunityContextProvider";
import { ReplyItem } from "../community";
import ReplyInsert from "./ReplyInsert";

function BoardDetail() {
  const history = useHistory();

  const { b_seq } = useParams();
  // console.log("b-seq", b_seq);

  const {
    boardDetail,
    setBoardDetail,
    replyList,
    setReplyList,
    ReplySave,
    changeReply,
  } = useCommuContext();

  const boardViewDetail = useCallback(async () => {
    const res = await fetch(`http://localhost:5000/board/detail/${b_seq}`);
    const result = await res.json();
    await setBoardDetail(result);
  });
  useEffect(boardViewDetail, []);
  console.table(boardDetail);

  const boardReviewDetail = useCallback(async () => {
    const res = await fetch(
      `http://localhost:5000/board/reply/detail/${b_seq}`
    );
    const replyView = await res.json();
    console.log("댓글 목록 다 나오자!", replyView);

    await setReplyList(replyView);
    console.log("replyList 확인", replyList);
  });
  useEffect(boardReviewDetail, []);

  const replyBody = replyList.map((reply, index) => {
    return <ReplyItem reply={reply} />;
  });

  const clickHome = () => {
    history.replace("/board");
  };
  const clickUpdate = () => {
    history.replace(`/board/update/${b_seq}`);
  };
  const clickDelete = () => {
    history.replace(`/board/delete/${b_seq}`);
  };

  return (
    <>
      <div className="detail_view">
        <div>
          <label>제목</label>
          <input disabled value={boardDetail.b_title} />
        </div>
        <div>
          <label>날짜</label>
          <input disabled value={boardDetail.b_date} />
        </div>
        <div>
          <label>시간</label>
          <input disabled value={boardDetail.b_time} />
        </div>
        <div>
          <label>작성자</label>
          <input disabled value={boardDetail.b_writer} />
        </div>
        <div>
          <label>내용</label>
          <input disabled value={boardDetail.b_content} />
        </div>
      </div>
      <div className="community detail_btn_list">
        <button onClick={clickHome}>목록으로</button>

        <button onClick={clickUpdate}>수정하기</button>

        <button onClick={clickDelete}>삭제하기</button>
      </div>

      <div className="detail_reply">
        <ReplyInsert />
        <div className="reply_view">{replyBody}</div>
      </div>
    </>
  );
}

export default BoardDetail;
