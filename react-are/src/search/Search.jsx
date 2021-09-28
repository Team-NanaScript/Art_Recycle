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
  const [hashTag, setHashTag] = useState({
    h_cate: "",
    h_text: "",
  });

  const [hashTagList, setHashTagList] = useState([]);

  const changeTag = (tagCate, tagText) => {
    const _hashTag = {
      h_cate: tagCate,
      h_text: tagText,
    };
    // setHashTag(_hashTag);
    // console.log(hashTag);
    setHashTagList([...hashTagList, _hashTag]);
    console.table(hashTagList);
  };

  const clickTag = (e) => {
    const tag = e.target;
    if (tag.tagName === "DIV") {
      const tagText = tag.innerText;
      const tagCate = tag.className;
      changeTag(tagCate, tagText);
    }
  };

  console.log(hashTagList.length);
  const hashTagView = hashTagList.map((hash) => {
    return <div>{hash.h_text}</div>;
  });

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
        <div>{hashTagView}</div>
        <Result />
      </div>
    </BrowserRouter>
  );
};

export default Search;
