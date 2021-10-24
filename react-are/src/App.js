import "./App.css";
import MainNav from "./comps/MainNav";
import { Footer, MainBody } from "./comps";
import { BrowserRouter, Route } from "react-router-dom";
import { Login, Join, Logout } from "./member";
import { Search, Detail } from "./search";
import { AteInsert } from "./atelier";
import Result from "./search/Result";
import MainCommunity from "./community/MainCommunity";
import UserContextProvider from "./context/UserContext";
import HashTagContextProvider from "./context/HashTagContextProvider";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <UserContextProvider>
          <MainNav />
          <Route path="/" component={MainBody} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/logout" component={Logout} exact />
          <Route path="/join" component={Join} />
        </UserContextProvider>
        {/* <HashTagContextProvider> */}
        <Route
          path={["/search/local", "/search/way", "/search/material"]}
          component={Search}
          exact
        />
        <Route path="/search/result/:query" component={Result} exact />
        {/* </HashTagContextProvider> */}
        <Route path="/detail/:at_code" component={Detail} exact />
        {/* <Route path="/search/way" component={Search} exact /> */}
        {/* <Route path="/search/material" component={Search} exact /> */}
        <Route path="/board" component={MainCommunity} exact />
        <Route path="/board/insert" component={MainCommunity} />
        <Route path="/board/detail/:b_seq" component={MainCommunity} exact />
        <Route path="/atelier" component={AteInsert} exact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
