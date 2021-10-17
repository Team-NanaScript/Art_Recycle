// import React, { useState } from "react";
import "../css/SearchSection.css";

import { BrowserRouter, Route } from "react-router-dom";
import {
  LocalSearch,
  WaySearch,
  MaterialSearch,
  Result,
  SearchNav,
} from "../search";
import HashTagContext from "../context/HashTagContext";

const Search = () => {
  // const hashTagView = hashTagList.map((hash) => {
  //   return <div>{hash.h_text}</div>;
  // });

  return (
    <BrowserRouter>
      <div className="Search">
        <header>
          <h2>공방찾기</h2>
        </header>
        <SearchNav />
        <HashTagContext>
          <Route path="/search/local" component={LocalSearch} exact />
          <Route path="/search/way" component={WaySearch} exact />
          <Route path="/search/material" component={MaterialSearch} exact />
        </HashTagContext>
        {/* <div>{hashTagView}</div> */}
        <Result />
      </div>
    </BrowserRouter>
  );
};

export default Search;
