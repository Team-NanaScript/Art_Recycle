import { Route } from "react-router";
import CommunityContextProvider from "../context/CommunityContextProvider";
import "../css/community.css";
import { BoardInsert, BoardList, BoardDetail, Notice } from "../community";

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
        <BoardList />
      </Route>
      <Route path="/board/detail/:b_seq" exact>
        <BoardDetail />
      </Route>
      <Route path="/board/update/:b_seq" exact>
        <BoardInsert />
      </Route>
      <Route path="/notice" exact>
        <Notice />
      </Route>
    </CommunityContextProvider>
  );
}

export default MainCommunity;
