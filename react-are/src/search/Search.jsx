// import React, { useState } from "react";
import "../css/SearchSection.css";

import { BrowserRouter, Route } from "react-router-dom";
import {
  LocalSearch,
  WaySearch,
  MaterialSearch,
  HashTag,
  HashResult,
  SearchNav,
} from "../search";
import HashTagContextProvider from "../context/HashTagContextProvider";

const Search = () => {
  // const hashTagView = hashTagList.map((hash) => {
  //   return <div>{hash.h_text}</div>;
  // });

  return (
    <div className="Search">
      <header>
        <h2>공방찾기</h2>
      </header>
      <SearchNav />
      <HashTagContextProvider>
        <Route path="/search/local" component={LocalSearch} exact />
        <Route path="/search/way" component={WaySearch} exact />
        <Route path="/search/material" component={MaterialSearch} exact />
        <HashTag />
        <HashResult />
      </HashTagContextProvider>
    </div>
  );
};

export default Search;
