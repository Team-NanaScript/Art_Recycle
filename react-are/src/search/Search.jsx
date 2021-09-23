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
    alert("_tag길이: " + _tag.length); // 길이가 계속 0인 문제 발생
    _tag[_tag.length] = tagText;

    // alert("_tag:" + _tag); // 방금 누른 text만 보여준다

    setHashTag(_tag);
    alert("_tag길이: " + _tag.length); // 길이가 계속 0인 문제 발생
    alert("tagText: " + tagText); //정상
    console.table(hashTag[_tag.length]); // undefined 로만 뜬다.
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
