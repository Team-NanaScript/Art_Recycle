import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useCommuContext } from "../context/CommunityContextProvider";

function ReplyInsert() {
  const { b_seq } = useParams();
  const { changeReply, ReplySave } = useCommuContext();

  return (
    <>
      <div className="detail_reply">
        <div className="community reply_insert">
          <input
            data-seq={b_seq}
            onChange={changeReply}
            name="r_writer"
            className="r_writer"
            placeholder="작성자를 입력해주세요"
          />
          <input
            data-seq={b_seq}
            onChange={changeReply}
            name="r_content"
            placeholder="댓글을 입력해주세요"
          />
          <button onClick={ReplySave}>등록</button>
        </div>
      </div>
    </>
  );
}

export default ReplyInsert;
