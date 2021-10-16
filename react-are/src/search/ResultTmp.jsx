import React, { useCallback, useEffect, useState } from "react";
import "../css/result.css";
import { useParams } from "react-router";
import AteList from "../atelier/AteList";

const ResultTmp = () => {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState({});

  const { query } = useParams();

  const searchResult = useCallback(async () => {
    const res = await fetch(`http://localhost:5000/users/test/${query}`);
    const tmpList = await res.json();
    console.table(tmpList);
    setUser(tmpList);
  }, []);

  const getUser = async () => {
    const res = await fetch("http://localhost:5000/users/test");
    const tmpList = await res.json();
    console.table(tmpList);
    setUser(tmpList);
  };

  //   useCallback(searchList, [searchList]);

  //   useEffect(searchList_tmp, [searchList_tmp]);
  useEffect(searchResult, [searchResult]);

  return (
    <div>
      <section>
        <h2 className="result">검색 결과</h2>
        <button onClick={getUser}>가져오기</button>
        <p>{query}</p>
        <p>
          {user.u_id ? (
            <AteList notMsg="검색 결과가 없습니다"/>
          ) : (
            "false"
          )}
        </p>
      </section>
    </div>
  );
};

export default ResultTmp;
