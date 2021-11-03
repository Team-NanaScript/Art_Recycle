import React, { useState } from "react";
import { useCommuContext } from "../context/CommunityContextProvider";

function BoardItem({ reply }) {
  const { r_Id, r_writer, r_content, r_bSeq } = reply;
  const { iconClick, replyDelete, changeReply } = useCommuContext();

  return (
    <div>
      <label>{r_writer}</label>
      <input value={r_content} onChange={changeReply} />
      <i data-id={r_Id} onClick={iconClick} className="fas fa-pencil-alt"></i>
      <span data-id={r_Id} data-seq={r_bSeq} onClick={replyDelete}>
        &times;
      </span>
    </div>
  );
}

export default BoardItem;
