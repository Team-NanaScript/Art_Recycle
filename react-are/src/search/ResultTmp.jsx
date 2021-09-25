import React, { useCallback, useEffect, useState } from "react";
import "../css/result.css";

const ResultTmp = ({match}, props) => {
  const [userList, setUserList] = useState([]);

  const {query} = match.params

  const searchList =
  //  useCallback(
   async(search_query)=>{
    const res = await fetch(`http://localhost:5000/users/test/${search_query}`)
    const tmpList = await res.json();
    console.table(tmpList);
    return tmpList;
    // setUserList(tmpList)
  }
  // , [])
  // useEffect(searchList, [searchList])

  const testBody = ()=> {
    searchList(query);
    // console.table(tmp)
    // if(tmp.length > 0){
    if(userList.length > 0){
      // return tmp.map((user) =>
      return userList.map((user) =>
        <div className="result_search">
          <div className="result_image"></div>
          <div className="result_ex">
            <h2>{user.u_id}</h2>
            <p>
              {user.u_email}
            </p>
            <p>{user.u_nickname}</p>
          </div>
        </div>
      )
    }
  }

  // useEffect(searchList,[searchList]);

  return (
    <div>
      <section>
        <div>Hash-Tag</div>
        <button>검색</button>
        <label>{query}</label>
      </section>

      <section>
        <h2 className="result">검색 결과</h2>
            {testBody}
      </section>
    </div>
  );
};

export default ResultTmp;
