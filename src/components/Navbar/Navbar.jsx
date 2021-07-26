import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Logo, NavList, Resume, List } from "./Navbar.styles";

function Nav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () =>{
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return(
    <Navbar>
        <Logo to="/" onClick={closeMobileMenu}>
          Padmaja
        </Logo>
        <NavList>
        <div className="menu-icon" onClick={handleClick}>
          <i style={{ color:'#fff' }} className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        <List className={click ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-item">
            <Link to='/about'className="nav-links" onClick={closeMobileMenu}>
              <span className="text-white">01.</span>About
            </Link>
          </ul>
          <ul className="nav-item">
            <Link to='/projects'className="nav-links" onClick={closeMobileMenu}>
              <span className="text-white">02.</span>Projects
            </Link>
          </ul>
          <ul className="nav-item">
            <Link to='/experience'className="nav-links" onClick={closeMobileMenu}>
              <span className="text-white">03.</span>Experience
            </Link>
          </ul>
          <ul className="nav-item">
            <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
              <span className="text-white">04.</span>Contact
            </Link>
          </ul>
        {button && <Resume onClick={showButton}>RESUME</Resume>}
        </List>
      </NavList>
  </Navbar>
  );
}

export default Nav;
