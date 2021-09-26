import "./App.css";
import MainNav from "./comps/MainNav";
import { Footer, MainBody } from "./comps";
import { BrowserRouter, Route } from "react-router-dom";
import { Login, Join } from "./member";
import { Search, Detail } from "./search";
import ResultTmp from "./search/ResultTmp";
import MainCommunity from "./community/MainCommunity";
import { useState } from "react";

function App() {
  // const [hashTag, setHashTag] = useState([]);

  // const changeTag = (tagText) => {
  //   // const _tag = [...hashTag];
  //   // const _tag = [...tagList];

  //   alert("_tag길이: " + _tag.length); // 길이가 계속 0인 문제 발생
  //   // _tag[_tag.length] = tagText;
  //   // _tag.push(tagText);

  //   // setHashTag(_tag);
  //   // alert("tag : "+ _tag[0] + " hash : " + tagList[0])
  //   // alert("_tag길이: " + _tag.length); // 길이가 계속 1인 문제 발생
  //   // alert("hashTag 길이: " + tagList.length); // 길이가 계속 0인 문제 발생
  //   // alert("tagText: " + tagText); //정상
  //   // console.table(tagList); // undefined 로만 뜬다.
  //   tmp_changeTag(tagText, hashTag, setHashTag);
  // };

  // const tmp_changeTag = (tagText, hashTag, setHashTag) => {
  //   const _tag = [...hashTag];
  //   // alert("tag : "+ _tag[0] + " hash : " + hashTag[0])
  //   _tag.push(tagText);
  //   setHashTag(_tag);
  //   alert("tag : " + _tag[0] + " hash : " + hashTag[0]);
  // };

  // const args = {
  //   changeTag,
  //   hashTag,
  //   setHashTag,
  // };

  // const args_result = {

  // }
  return (
    <BrowserRouter>
      <div className="App">
        <MainNav />
        <Route path="/" component={MainBody} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/join" component={Join} />
        <Route path="/search/local" component={Search} exact />
        <Route path="/search/result/:query" component={ResultTmp} exact />
        <Route path="/detail" component={Detail} />
        <Route path="/search/way" component={Search} exact />
        <Route path="/search/material" component={Search} exact />
        {/* 커뮤니티 수정해주세염 */}
        <Route path="/board" component={MainCommunity} exact />
        <Route path="/board/insert" component={MainCommunity} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
