import React, { useState } from "react";
import "../css/SearchSection.css";

import { BrowserRouter, Route } from "react-router-dom";
import {
  LocalSearch,
  WaySearch,
  MaterialSearch,
  Result,
  SearchNav,
} from "../search";

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
        <Route
          path="/search/local"
          render={() => <LocalSearch clickTag={clickTag} />}
          exact
        />
        <Route
          path="/search/way"
          render={() => <WaySearch clickTag={clickTag} />}
          exact
        />
        <Route
          path="/search/material"
          render={() => <MaterialSearch clickTag={clickTag} />}
          exact
        />
        {/* <div>{hashTagView}</div> */}
        <Result />
      </div>
    </BrowserRouter>
  );
};

export default Search;
