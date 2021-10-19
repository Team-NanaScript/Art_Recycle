// import React, { useCallback } from "react";
import { useHashTagContext } from "../context/HashTagContextProvider";
import { Tmap } from "./index";

const localData = [
  "전체",
  "서울",
  "경기",
  "광주",
  "대구",
  "대전",
  "부산",
  "세종",
  "울산",
  "인천",
  "강원",
  "경남",
  "경북",
  "전남",
  "전북",
  "충남",
  "충북",
  "제주",
];

const LocalSearch = () => {
  const { clickTag } = useHashTagContext();
  // const local_box = useCallback(() => {
  const local_box = () => {
    return localData.map((text) => {
      return (
        <div className="tag local" onClick={clickTag} key={text}>
          {text}
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
