import React, { useCallback } from "react";

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
  const local_box = useCallback(() => {
    return localData.map((text) => {
      return <div>{text}</div>;
    });
  });
  return <div className="LocalSearch"></div>;
};

export default LocalSearch;
