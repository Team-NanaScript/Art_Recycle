import "./App.css";
import MainNav from "./comps/MainNav";
import { Footer, MainBody } from "./comps";
import { BrowserRouter, Route } from "react-router-dom";
import { Login, Join } from "./member";
import { Search, Detail} from "./search";
import ResultTmp from "./search/ResultTmp"
import { useState } from "react";

function App() {
  const [hashTag, setHashTag] = useState([]);

  const changeTag = (tagText) => {
    const _tag = [...hashTag];

    alert("_tag길이: " + _tag.length); // 길이가 계속 0인 문제 발생
    // _tag[_tag.length] = tagText;
    _tag.push(tagText);

    setHashTag(_tag);
    alert("_tag길이: " + _tag.length); // 길이가 계속 1인 문제 발생
    alert("hashTag 길이: " + hashTag.length); // 길이가 계속 0인 문제 발생
    // alert("tagText: " + tagText); //정상
    console.table(hashTag); // undefined 로만 뜬다.
  };
  
  return (
    <BrowserRouter>
      <div className="App">
        <MainNav />
        <Route path="/" component={MainBody} exact />
        <Route path="/login" component={Login} exact/>
        <Route path="/join" component={Join} />
        <Route path="/search/local" render={() => <Search changeTag={changeTag} />} exact /> 
        <Route path="/search/result/:query" component={ResultTmp} exact/>
        <Route path="/detail" component={Detail} />
        <Route path="/search/way" component={Search} exact/>
        <Route path="/search/material" component={Search}/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
