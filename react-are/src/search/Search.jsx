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
  let [hashTag, setHashTag] = useState([]);

  const changeTag = (tagText) => {
    // _tag에 state 복사 + tagText 추가
    const _tag = [...hashTag, tagText];

    // tagText를 state배열에 추가
    // _tag[_tag.length] = tagText;
    // _tag.push(tagText);

    // _tag를 state에 setting
    setHashTag(_tag);
    console.log("_tag길이: " + _tag.length);
    console.log("hashTag 길이: " + hashTag.length); // 길이가 계속 0인 문제 발생
    console.log("hashTag : " + hashTag); // undefined 로만 뜬다.
  };

  const clickTag = (e) => {
    const tag = e.target;

    if (tag.tagName === "DIV") {
      const tagText = tag.innerText;
      {
        changeTag(tagText);
      }
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
        <Result />
      </div>
    </BrowserRouter>
  );
};

export default Search;
