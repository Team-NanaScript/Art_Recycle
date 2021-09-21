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

  const changeHashTag = (event) => {
    const tag = event.target;
    if (tag.tagName === "DIV") {
      const { value } = event.target;

      const _tag = [...hashTag];

      _tag[_tag.length] = value;
      setHashTag(_tag);
      console.log(hashTag);
    }
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
          changeHashTag={changeHashTag}
          exact
        />
        <Route
          path="/search/way"
          component={WaySearch}
          changeHashTag={changeHashTag}
          exact
        />
        <Route
          path="/search/material"
          component={MaterialSearch}
          changeHashTag={changeHashTag}
          exact
        />
        <div className="result_tag"></div>
        <Result />
      </div>
    </BrowserRouter>
  );
};

export default Search;
