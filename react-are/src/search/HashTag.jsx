import React from "react";
import { useHashTagContext } from "../context/HashTagContextProvider";
import { IoCloseOutline } from "react-icons/io5";
import "../css/hashTag.css";

const HashTag = () => {
  const { hashTagList, deleteHashTag } = useHashTagContext();

  const viewHashTag = hashTagList.map(({ h_text }) => {
    return (
      <span className="hashtag" key={h_text}>
        {h_text}
        <i>
          <IoCloseOutline className="icon_close" size="20" color="#ccc" />
        </i>
      </span>
    );
  });
  return (
    <section className="hashtag_section">
      <div className="hashtag_box" onClick={deleteHashTag}>
        {viewHashTag}
      </div>
    </section>
  );
};

export default HashTag;
