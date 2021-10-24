import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useCommuContext } from "../context/CommunityContextProvider";

function ReplyInsert() {
  const { b_seq } = useParams();

  return (
    <>
      <div className="detail_reply">
        <div className="community reply_insert">
          <input />
          <button>등록</button>
        </div>
        {/* 여기 값도 불러올 값 */}
        <div className="reply_view">
          <label>ID</label>
          <input readOnly value="Dd" />
          <i className="fas fa-pencil-alt"></i>
          <span>&times;</span>
        </div>
      </div>
    </>
  );
}

export default ReplyInsert;
