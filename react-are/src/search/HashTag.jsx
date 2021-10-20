import React from "react";
import { useHashTagContext } from "../context/HashTagContextProvider";
import { IoCloseOutline } from "react-icons/io5";
import "../css/hashTag.css";

const HashTag = () => {
  const { hashTagList, deleteHashTag } = useHashTagContext();

  const viewHashTag = hashTagList.map(({ h_text }) => {
    return (
      <div className="hashtag" key={h_text}>
        {h_text}
        <IoCloseOutline
          className={h_text}
          size="20"
          color="#ccc"
          onClick={deleteHashTag}
        />
      </div>
    );
  });
  return (
    <section className="hashtag_section">
      <div className="hashtag_box">{viewHashTag}</div>
    </section>
  );
};

export default HashTag;
