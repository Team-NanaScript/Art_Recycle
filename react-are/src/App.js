import "./App.css";
import MainNav from "./comps/MainNav";
import { Footer, MainBody } from "./comps";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainNav />
        <MainBody />
        <Route path="/" component={MainBody} exact />
        <Route path="/login" component={Login} />
        <Route path="/join" component={Join} />
        <Route path="/join" component={Join} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
