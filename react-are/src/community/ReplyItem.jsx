import React from "react";
import { useCommuContext } from "../context/CommunityContextProvider";

function BoardItem({ reply }) {
  const { _id, r_writer, r_content } = reply;
  const { iconClick, reviewDelete } = useCommuContext();

  return (
    <div>
      <label>{r_writer}</label>
      <input readOnly value={r_content} />
      <i data-id={_id} onClick={iconClick} className="fas fa-pencil-alt"></i>
      <span data-id={_id} onClick={reviewDelete}>
        &times;
      </span>
    </div>
  );
}

export default BoardItem;
