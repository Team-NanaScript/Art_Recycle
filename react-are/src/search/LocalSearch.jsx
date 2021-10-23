// import React, { useCallback } from "react";
import { useHashTagContext } from "../context/HashTagContextProvider";
import { Tmap } from "./index";

const localData = [
  { h_id: "L01", h_text: "서울" },
  { h_id: "L02", h_text: "경기" },
  { h_id: "L03", h_text: "광주" },
  { h_id: "L04", h_text: "대구" },
  { h_id: "L05", h_text: "대전" },
  { h_id: "L06", h_text: "부산" },
  { h_id: "L07", h_text: "세종" },
  { h_id: "L08", h_text: "울산" },
  { h_id: "L09", h_text: "인천" },
  { h_id: "L10", h_text: "강원" },
  { h_id: "L11", h_text: "경남" },
  { h_id: "L12", h_text: "경북" },
  { h_id: "L13", h_text: "전남" },
  { h_id: "L14", h_text: "전북" },
  { h_id: "L15", h_text: "충남" },
  { h_id: "L16", h_text: "충북" },
  { h_id: "L17", h_text: "제주" },
];

const LocalSearch = () => {
  const { clickTag } = useHashTagContext();
  // const local_box = useCallback(() => {
  const local_box = () => {
    return localData.map((tag) => {
      return (
        <div
          className="tag local"
          onClick={clickTag}
          key={tag.h_id}
          data-id={tag.h_id}
          data-text={tag.h_text}
        >
          {tag.h_text}
        </div>
      );
    });
  };
  // }, []);
  return (
    <section className="search_section">
      <div className="local_box">{local_box()}</div>
      <div className="map_sample">
        <Tmap />
      </div>
    </section>
  );
};

export default LocalSearch;
