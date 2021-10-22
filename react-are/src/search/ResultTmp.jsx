import React, { useCallback, useEffect, useState } from "react";
import "../css/result.css";
import { useParams } from "react-router";
import AteList from "../atelier/AteList";
import { useHashTagContext } from "../context/HashTagContextProvider";

const ResultTmp = () => {
  const [ateList, setAteList] = useState([
    {
      at_code: "001",
      at_name: "공방명",
      at_page: "https://www.instagram.com/recode_/",
      at_image: "/static/media/result_image.jpg",
    },
    {
      at_code: "002",
      at_name: "공방명",
      at_page: "https://www.instagram.com/recode_/",
      at_image: "../static/media/result_image.jpg",
    },
    {
      at_code: "003",
      at_name: "공방명",
      at_page: "https://www.instagram.com/recode_/",
      at_image: "../image/result_image.jpg",
    },
  ]);

  const { hashTagList } = useHashTagContext();

  const { query } = useParams();

  const searchResult = useCallback(async () => {
    const res = await fetch(`http://localhost:5000/users/test/${query}`);
    const tmpList = await res.json();
    // console.table(tmpList);
    // setUser(tmpList);
  }, []);

  useEffect(searchResult, [searchResult]);

  return (
    <div>
      <section>
        <h2 className="result">검색 결과</h2>
        <p>{query}</p>
        <AteList notMsg="검색 결과가 없습니다" ateList={ateList} />
      </section>
    </div>
  );
};

export default ResultTmp;
