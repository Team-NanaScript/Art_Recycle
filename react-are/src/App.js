import "./App.css";
import MainNav from "./comps/MainNav";
import { Footer, MainBody } from "./comps";
import { BrowserRouter, Route } from "react-router-dom";
import { Login, Join } from "./member";
import { Search, Detail } from "./search";
import Result from "./search/Result";
import MainCommunity from "./community/MainCommunity";
import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainNav />
        <UserContextProvider>
          <Route path="/" component={MainBody} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/join" component={Join} />
        </UserContextProvider>
        {/* <Route
          path="/search/local"
          render={() => <Search clickTag={clickTag} />}
          exact
        /> */}
        <Route path="/search/local" component={Search} />
        <Route path="/search/result/:query" component={Result} exact />
        <Route path="/detail/:at_code" component={Detail} exact />
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
