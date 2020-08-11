import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Characters from "./components/Characters";
import Navigation from "./components/Navigation";
import Comics from "./components/Comics";
import Character from "./components/Character";
import Comic from "./components/Comic";

function App() {
  return (
    <>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/" component={Characters}></Route>
          <Route exact path="/comics" component={Comics}></Route>
          <Route exact path="/characters" component={Characters}></Route>
          <Route
            exact
            path="/characters/:characterID"
            component={Character}
          ></Route>
          <Route exact path="/comics/:comicID" component={Comic}></Route>
          <Route>
            <h1>Not Found</h1>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
