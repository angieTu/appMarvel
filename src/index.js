import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import App from "./App";

import { ComicsProvider } from "./contexts/ComicsContext";
import { CharactersProvider } from "./contexts/CharactersContext";

ReactDOM.render(
  <React.StrictMode>
    <ComicsProvider>
      <CharactersProvider>
        <App />
      </CharactersProvider>
    </ComicsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
