import "./App.css";
import { Route, Switch } from "react-router";
import LandingPage from "./pages/landingPage";
import Navbar from "./component/navbar";


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
