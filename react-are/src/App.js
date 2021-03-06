import "./App.css";
import MainNav from "./comps/MainNav";
import { Footer, MainBody } from "./comps";
import { BrowserRouter, Route } from "react-router-dom";
import { Login, Join, Logout } from "./member";
import { Search } from "./search";
import { AteInsert, AteDetail } from "./atelier";
import QueryResult from "./search/QueryResult";
import MainCommunity from "./community/MainCommunity";
import UserContextProvider from "./context/UserContext";
import AtelierContextProvider from "./context/AtelierContextProvider";

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
        <Route
          //   path={"/search/**"}
          path={["/search/local", "/search/way", "/search/material"]}
          component={Search}
          exact
        />
        <Route path="/search/:query" component={QueryResult} exact />
        <Route
          path={["/board", "/board/**", "/notice", "/notice/**"]}
          component={MainCommunity}
          exact
        />
        {/* <Route path="/board" component={MainCommunity} exact /> */}
        {/* <Route path="/board/insert" component={MainCommunity} /> */}
        {/* <Route path="/board/detail/:b_seq" component={MainCommunity} exact /> */}
        {/* <Route path="/board/update/:b_seq" component={MainCommunity} exact /> */}
        {/* <Route path="/board/delete/:b_seq" component={MainCommunity} exact /> */}
        <AtelierContextProvider>
          <Route path="/atelier" component={AteInsert} exact />
          <Route path="/detail/:at_code" component={AteDetail} exact />
        </AtelierContextProvider>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
