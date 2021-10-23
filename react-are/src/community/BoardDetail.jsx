import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useCommuContext } from "../context/CommunityContextProvider";

function BoardDetail() {
  const { b_seq } = useParams();
  // console.log("b-seq", b_seq);

  const { boardDetail } = useCommuContext();
  // console.table(boardDetail);

  return (
    <>
      <div>
        <div>"1" - {b_seq}</div>
        <div>"2" - b_title</div>
        <div>"3" - {boardDetail.b_title}</div>

        <div>"4" - Hi</div>
      </div>
      <div>
        <Link to="/board">
          <button>목록으로</button>
        </Link>
      </div>
      <div className="detail_reply">
        <div className="reply_insert">
          <input></input>
          <button>등록</button>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default BoardDetail;
