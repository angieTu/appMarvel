import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";

import Character from "./components/Character";
import Comic from "./components/Comic";
import ComicsContext from "./contexts/ComicsContext";
import CharactersContext from "./contexts/CharactersContext";
import ContainerCards from "./components/ContainerCards";

function App() {
  const { comics } = useContext(ComicsContext);
  const { characters } = useContext(CharactersContext);

  return (
    <>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/comics">
            <ContainerCards type="comics" data={comics} />
          </Route>
          <Route exact path="/characters">
            <ContainerCards type="characters" data={characters} />
          </Route>
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
