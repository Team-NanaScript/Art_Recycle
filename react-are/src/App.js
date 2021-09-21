import "./App.css";
import MainNav from "./comps/MainNav";
import { Footer, MainBody } from "./comps";
import { BrowserRouter, Route } from "react-router-dom";
import { Login, Join } from "./member";
import { Search, Detail} from "./search";
import ResultTmp from "./search/ResultTmp"

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <MainNav />
        {/* <Route path="/" component={()=><MainBody searchList={searchList} />} exact /> */}
        <Route path="/" component={MainBody} exact />
        <Route path="/login" component={Login} exact/>
        <Route path="/join" component={Join} />
        <Route path="/search/local" component={Search} exact />
        <Route path="/search/result/:query" component={ResultTmp} exact/>
        <Route path="/detail" component={Detail} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
