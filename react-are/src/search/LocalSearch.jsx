import React from "react";

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
  return (
    <section className="local">
      div 전체 div 서울 div 경기 div 광주 div 대구 div 대전 div 부산 div 세종
      div 울산 div 인천 div 강원 div 경남 div 경북 div 전남 div 전북 div 충남
      div 충북 div 제주
    </section>
  );
};

export default LocalSearch;
