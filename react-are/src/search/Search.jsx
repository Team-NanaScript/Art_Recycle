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

  const changeTag = (tagText) => {
    const _tag = [...hashTag];

    _tag[_tag.length] = tagText;
    setHashTag(_tag);
    console.table(hashTag[_tag.length - 1]);
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
          render={() => <LocalSearch changeTag={changeTag} />}
          exact
        />
        <Route
          path="/search/way"
          render={() => <WaySearch changeTag={changeTag} />}
          exact
        />
        <Route
          path="/search/material"
          render={() => <MaterialSearch changeTag={changeTag} />}
          exact
        />
        <Result />
      </div>
    </BrowserRouter>
  );
};

export default Search;
