import { Route } from "react-router";
import CommunityContextProvider from "../context/CommunityContextProvider";
import "../css/community.css";
import Board from "./Board";
import Insert from "./Insert";

function MainCommunity() {
  return (
    // <div>
    //   <Insert board={board} setBoard={setBoard} commuList={commuList} setCommuList={setCommuList} />
    //   <Board commuList={commuList} />
    // </div>
    // <BrowserRouter>
    //   <div className="com_main">
    //     <Route path="/board" component={Board} exact />
    //     <Route path="/board/insert" component={Insert} />
    //   </div>
    // </BrowserRouter>
    <CommunityContextProvider>
      <Route path="/" exact>
        Main
      </Route>
      <Route path="/board/insert">
        <Insert />
      </Route>
      <Route path="/board" exact>
        <Board />
      </Route>
    </CommunityContextProvider>
  );
}

export default MainCommunity;
