import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Character from "./components/Character";
import Comic from "./components/Comic";

import ComicsContext from "./contexts/ComicsContext";
import CharactersContext from "./contexts/CharactersContext";

import ContainerCards from "./pages/ContainerCards";

function App() {
  const { comics } = useContext(ComicsContext);
  const { characters } = useContext(CharactersContext);

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/characters" />
          </Route>
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
        <Footer />
      </Router>
    </>
  );
}

export default App;
