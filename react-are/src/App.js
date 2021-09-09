import "./App.css";
import MainNav from "./comps/MainNav";
import { Footer, MainBody } from "./comps";
import { BrowserRouter, Route } from "react-router-dom";
import { Login, Join } from "./member";
import { Search, Detail } from "./search";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainNav />
        <Route path="/" component={MainBody} exact />
        <Route path="/login" component={Login} />
        <Route path="/join" component={Join} />
        <Route path="/search" component={Search} />
        <Route path="/detail" component={Detail} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
