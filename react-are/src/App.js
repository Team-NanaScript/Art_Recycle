import "./App.css";
import MainNav from "./comps/MainNav";
import { Footer, MainBody } from "./comps";
import { BrowserRouter, Route } from "react-router-dom";
import { Login, Join } from "./member";
import { Search, Detail, Result } from "./search";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState([]);

  const searchList = async(query)=>{
    const res = await fetch(`http://localhost:5000/users/test/${query}`)
    const userList = await res.json();
    await setUserList(userList);
    return userList;
  }
  return (
    <BrowserRouter>
      <div className="App">
        <MainNav />
        <Route path="/" component={()=><MainBody searchList={searchList} />} exact />
        <Route path="/login" component={Login} exact/>
        <Route path="/join" component={Join} />
        <Route path="/search/local" component={Search} exact />
        <Route path="/search/:query" component={Result} />
        <Route path="/detail" component={Detail} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
