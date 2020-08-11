import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  justify-content: space-evenly;
  display: flex;
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  z-index: 10;
  height: 15%;
  font: 400 14px/1.2 "Roboto Bold", "Trebuchet MS", Helvetica, Arial, sans-serif;
  color: #202020;
  align-items: center;
  background-color: #202020;

  & > a {
    font-size: 30px;
    text-decoration: none;
    color: #fff;
`;

const StyledNavLink = styled(NavLink)`
  &.selected {
    color: #e62429;
  }
`;

const Navigation = () => {
  return (
    <Header>
      <StyledNavLink activeClassName="selected" to="/characters">
        Characters
      </StyledNavLink>
      <StyledNavLink activeClassName="selected" to="/comics">
        Comics
      </StyledNavLink>
    </Header>
  );
};

export default Navigation;
