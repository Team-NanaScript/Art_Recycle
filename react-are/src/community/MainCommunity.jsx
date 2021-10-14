import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "../css/community.css";

import { Board, Insert } from "../community";
import AreContext from "../context/AreContext";

function MainCommunity() {
  const [board, setBoard] = useState({
    c_no: 1,
    c_date: "",
    c_time: "",
    c_title: "",
    c_writer: "",
    c_text: "",
    c_count: 0,
  }); // 글 하나하나..
  const [commuList, setCommuList] = useState([]); // 게시판 리스트

  const providerData = { board, setBoard, commuList, setCommuList };
  return (
    // <div>
    //   <Insert board={board} setBoard={setBoard} commuList={commuList} setCommuList={setCommuList} />
    //   <Board commuList={commuList} />
    // </div>
    // <BrowserRouter>
    //   <div className="com_main">
    //     <Route path="/board" component={Board} exact />
    //     <Route path="/board/insert" component={Insert} />
    //   </div>
    // </BrowserRouter>
    <AreContext.Provider value={providerData}>
      <Route path="/" exact>
        Main
      </Route>
      <Route path="/board/insert">
        <Insert />
      </Route>
      <Route path="/board" exact>
        <Board />
      </Route>
    </AreContext.Provider>
  );
}

export default MainCommunity;
