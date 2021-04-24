import {NavLink} from "react-router-dom";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const MainNav = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <div className="navbar-nav mr-auto">
    <NavLink
      to="/"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Home
    </NavLink>
    <NavLink
      to="/public"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Public
    </NavLink>

    <NavLink
      to="/protected"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Protected
    </NavLink>

  </div>) : (
    <div className="navbar-nav mr-auto">
    <NavLink
      to="/"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Home
    </NavLink>
    <NavLink
      to="/public"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Public
    </NavLink>
  </div>
  );
};


export default MainNav;
