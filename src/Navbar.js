import React from "react";
import { NavLink } from "react-router-dom";

/* Add basic styling for NavLinks */
const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white"
};

const Bgc = {
  background: "darkblue"
};

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <NavLink to="/" exact style={link} activeStyle={Bgc}>
          Home
        </NavLink>

        <NavLink to="/about" exact style={link} activeStyle={Bgc}>
          About
        </NavLink>

        <NavLink to="/login" exact style={link} activeStyle={Bgc}>
          Login
        </NavLink>

        <NavLink to="/signup" exact style={link} activeStyle={Bgc}>
          Sign Up
        </NavLink>

        <NavLink to="/messages" exact style={link} activeStyle={Bgc}>
          Messages
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
