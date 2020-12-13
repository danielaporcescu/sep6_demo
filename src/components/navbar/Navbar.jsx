import { Menu, MenuItem } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1> UAA</h1>
        </NavLink>
        <Bars
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        />
        <div>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={Link} to="/">
              Flights
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/weather-page">
              Weather
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/planes">
              Planes
            </MenuItem>
          </Menu>
        </div>
        <NavMenu>
          <NavLink to="/">Flights</NavLink>
          <NavLink to="/weather-page">Weather</NavLink>
          <NavLink to="/planes">Planes</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}
export default Navbar;
