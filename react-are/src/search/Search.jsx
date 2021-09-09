import React from "react";
import "../css/SearchSection.css";

import { BrowserRouter, Route } from "react-router-dom";
import { LocalSearch, WaySearch, MaterialSearch, Result } from "../search";

const Search = () => {
  return (
    <BrowserRouter>
      <div className="Search">
        <header>
          <h2>공방찾기</h2>
        </header>
        <Route path="/search/local" component={LocalSearch} />
        <Route path="/search/way" component={WaySearch} />
        <Route path="/search/material" component={MaterialSearch} />
        <Result />
      </div>
    </BrowserRouter>
  );
};

export default Search;
