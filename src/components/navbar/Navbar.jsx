import React from "react";
import "./Navbar.css";
import {Nav, NavLink, Bars, NavMenu} from "./NavbarElements"

function Navbar() {

  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1> UAA</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/weather-page">
            Weather
          </NavLink>
          <NavLink to="/planes">
            Planes
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}
export default Navbar;