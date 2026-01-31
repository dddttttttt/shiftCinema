import FilmDetails from "./FilmDetails";
import Home from "./Home";
import NavBar from "./Navbar";
import { HashRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/film/:filmId">
            <FilmDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
