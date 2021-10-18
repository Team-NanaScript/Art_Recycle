// import React, { useCallback } from "react";
import { useHashTagContext } from "../context/HashTagContextProvider";

// const wayData = [
//   { w_title: "직접참여", w_text: "직접 공방을 방문하기" },
//   { w_title: "택배이용", w_text: "온라인으로 참여하기" },
// ];

const WaySearch = () => {
  const { clickTag } = useHashTagContext();

  // const wayBox = useCallback(() => {
  //   return wayData.map((text) => {
  //     return;
  //   });
  // });

  return (
    <section className="search_section">
      {/* <div className="way_box"></div> */}
      <div className="offline">
        <div className="tag way" onClick={clickTag}>
          직접참여
        </div>
        <p>직접 공방을 방문하기</p>
      </div>
      <div className="online">
        <div className="tag way" onClick={clickTag}>
          택배이용
        </div>
        <p>온라인으로 참여하기</p>
      </div>
    </section>
  );
};

export default WaySearch;
