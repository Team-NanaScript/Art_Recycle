import { Route } from "react-router";
import CommunityContextProvider from "../context/CommunityContextProvider";
import "../css/community.css";
import Board from "./Board";
import BoardDetail from "./BoardDetail";
import BoardInsert from "./BoardInsert";

function MainCommunity() {
  return (
    <CommunityContextProvider>
      <Route path="/" exact>
        Main
      </Route>
      <Route path="/board/insert">
        <BoardInsert />
      </Route>
      <Route path="/board" exact>
        <Board />
      </Route>
      <Route path="/board/detail/:b_seq" exact>
        <BoardDetail />
      </Route>
      <Route path="/board/update/:b_seq" exact>
        <BoardInsert />
      </Route>
    </CommunityContextProvider>
  );
}

export default MainCommunity;
