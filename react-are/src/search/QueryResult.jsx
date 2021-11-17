import React, { useCallback, useEffect, useState } from "react";
import "../css/result.css";
import { useParams } from "react-router";
import AteList from "../atelier/AteList";

const Result = () => {
  const [ateList, setAteList] = useState([]);

  const { query } = useParams();

  const searchResult = useCallback(async () => {
    const uri = "http://localhost:5000/atelier/search/" + query;
    const res = await fetch(uri);
    const tmpList = await res.json();
    console.table(tmpList);
    setAteList(tmpList);
  }, []);

  useEffect(searchResult, [searchResult]);

  return (
    <section className="result_wrap">
      <h2 className="result">검색 결과</h2>
      <AteList notMsg="검색 결과가 없습니다" ateList={ateList} />
    </section>
  );
};

export default Result;
