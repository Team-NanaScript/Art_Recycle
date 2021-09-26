import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "../css/community.css";

import { Board, Insert } from "../community";

function MainCommunity() {
  return (
    <BrowserRouter>
      <div className="com_main">
        <Route path="/board/insert" component={Insert} />
        <Route path="/board" component={Board} exact />
      </div>
    </BrowserRouter>
  );
}

export default MainCommunity;
