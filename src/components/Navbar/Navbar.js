import React from "react";
import { Navbar, Logo, NavList, Resume } from "./Navbar.styles";

function Nav() {
  return (
    <Navbar>
      <Logo>padmaja</Logo>

      <NavList>
        <ul>
          <span className="text-white">01.</span>About
        </ul>
        <ul>
          <span className="text-white">02.</span>Projects
        </ul>
        <ul>
          <span className="text-white">03.</span>Experience
        </ul>
        <ul>
          <span className="text-white">04.</span>Contact
        </ul>
        <Resume>Resume</Resume>
      </NavList>
    </Navbar>
  );
}

export default Nav;
