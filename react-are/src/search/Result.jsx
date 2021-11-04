import React, { useCallback, useEffect, useState } from "react";
import "../css/result.css";
import { useParams } from "react-router";
import AteList from "../atelier/AteList";
import { useHashTagContext } from "../context/HashTagContextProvider";
import { querySearch } from "../modules/searchFetch";

const Result = () => {
  const [ateList, setAteList] = useState([
    // {
    //   at_seq: 1,
    //   at_name: "나do나 공방",
    //   at_page: "https://www.instagram.com/nadona/",
    //   at_image: "/media/atelier.jpg",
    //   className: "list01",
    // },
    // {
    //   at_seq: 2,
    //   at_name: "Do It Yourself",
    //   at_page: "https://www.instagram.com/do_it_yourself/",
    //   at_image: "/assets/atelier.jpg",
    //   className: "list02",
    // },
    // {
    //   at_seq: 3,
    //   at_name: "do do doodle",
    //   at_page: "https://www.instagram.com/dodoodledo/",
    //   at_image: "../image/result_image.jpg",
    //   className: "list03",
    // },
  ]);

  // const { hashTagList } = useHashTagContext();

  const { query } = useParams();

  const searchResult = useCallback(async () => {
    // const result = await querySearch(query)
    const uri = "http://localhost:5000/search/" + query;
    // const encodeUri = encodeURI(uri);
    // const res = await fetch(`http://localhost:5000/users/test/${query}`);
    // const res = await fetch(encodeUri);
    const res = await fetch(uri);
    const tmpList = await res.json();
    console.table(tmpList);
    setAteList(tmpList);
  }, []);

  useEffect(searchResult, [searchResult]);

  return (
    <section className="result_wrap">
      <h2 className="result">검색 결과</h2>
      {/* <p>{query}</p> */}
      <AteList notMsg="검색 결과가 없습니다" ateList={ateList} />
    </section>
  );
};

export default Result;
