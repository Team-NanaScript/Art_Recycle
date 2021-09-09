import React from "react";
import MainNav from "./comps/MainNav";
import { Footer } from "./comps";
import { BrowserRouter, Route } from "react-router-dom";
import { LocalSearch, WaySearch, MaterialSearch } from "../search";

const Search = () => {
  return (
    <BrowserRouter>
      <div className="Search">
        <MainNav />
        <header>
          <h2>공방찾기</h2>
        </header>
        <Route path="/search/local" component={LocalSearch} />
        <Route path="/search/way" component={WaySearch} />
        <Route path="/search/material" component={MaterialSearch} />
        <Result />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Search;
