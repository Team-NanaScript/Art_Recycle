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
  const [hashTag, setHashTag] = useState([]);

  const hashTagChange = (event) => {
    // const { name, value } = event.target;

    const _tag = [...hashTag];

    _tag[_tag.length] = "다진마늘";
    setHashTag(_tag);

    _tag[_tag.length] = "갈매기";
    setHashTag(_tag);
  };

  return (
    <BrowserRouter>
      <div className="Search">
        <header>
          <h2>공방찾기</h2>
        </header>
        <SearchNav />
        <Route
          path="/search/local"
          component={LocalSearch}
          hashTagChange={hashTagChange}
          exact
        />
        <Route
          path="/search/way"
          component={WaySearch}
          hashTagChange={hashTagChange}
          exact
        />
        <Route
          path="/search/material"
          component={MaterialSearch}
          hashTagChange={hashTagChange}
          exact
        />
        <div className="result_tag"></div>
        <Result />
      </div>
    </BrowserRouter>
  );
};

export default Search;
