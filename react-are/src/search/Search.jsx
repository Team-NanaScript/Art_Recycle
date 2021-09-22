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

    alert("_tag길이: " + _tag.length);
    alert("tagText: " + tagText);

    _tag[_tag.length] = tagText;
    alert("_tag:" + _tag);
    setHashTag(_tag);
    console.table(hashTag[_tag.length]);
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
