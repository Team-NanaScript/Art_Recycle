// import React, { useCallback } from "react";
import { useHashTagContext } from "../context/HashTagContextProvider";

const wayData = [
  {
    h_id: "W01",
    h_text: "직접참여",
    h_desc: "직접 공방을 방문하기",
    h_className: "offline",
  },
  {
    h_id: "W02",
    h_text: "택배이용",
    h_desc: "온라인으로 참여하기",
    h_className: "online",
  },
];

const WaySearch = () => {
  const { clickTag } = useHashTagContext();

  // const wayBox = useCallback(() => {
  const way_box = () => {
    return wayData.map((tag) => {
      const className = "tag way " + tag.h_className;
      return (
        <div
          className={className}
          onClick={clickTag}
          key={tag.h_id}
          data-id={tag.h_id}
          data-text={tag.h_text}
        >
          <div>{tag.h_text}</div>
          <p>{tag.h_desc}</p>
        </div>
      );
    });
  };

  return (
    <section className="search_section">
      <div className="way_box">{way_box()}</div>
    </section>
  );

  // return (
  //   <section className="search_section">
  //     <div className="way_box"></div>

  //     <div className="offline">
  //       <div className="tag" onClick={clickTag}>
  //         직접참여
  //       </div>
  //       <p>직접 공방을 방문하기</p>
  //     </div>
  //     <div className="online">
  //       <div className="tag" onClick={clickTag}>
  //         택배이용
  //       </div>
  //       <p>온라인으로 참여하기</p>
  //     </div>
  //   </section>
  // );
};

export default WaySearch;
