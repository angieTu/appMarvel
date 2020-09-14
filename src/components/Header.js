import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink activeClassName="selected" to="/characters">
        Characters
      </NavLink>
      <NavLink activeClassName="selected" to="/comics">
        Comics
      </NavLink>
    </header>
  );
};

export default Header;
