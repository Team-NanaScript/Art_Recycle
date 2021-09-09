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
        <Result />
      </div>
    </BrowserRouter>
  );
};

export default Search;
