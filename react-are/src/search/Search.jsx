import React from "react";
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
  return (
    <BrowserRouter>
      <div className="Search">
        <header>
          <h2>공방찾기</h2>
        </header>
        <SearchNav />
        <Route path="/search/local" component={LocalSearch} exact />
        <Route path="/search/way" component={WaySearch} exact />
        <Route path="/search/material" component={MaterialSearch} exact />
        <div className="result_tag">
          <div>Hash-Tag</div>
          <button>검색</button>
        </div>
        <Result />
      </div>
    </BrowserRouter>
  );
};

export default Search;
