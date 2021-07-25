import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Logo, NavList, Resume, MenuIcon } from "./Navbar.styles";

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
        <MenuIcon onClick={handleClick}>
          <i style={{ color:'#fff' }} className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </MenuIcon>
        <NavList className={click ? 'nav-menu active' : 'nav-menu'}>
          <ul>
            <Link to='/about' onClick={closeMobileMenu}>
              <span className="text-white">01.</span>About
            </Link>
          </ul>
          <ul>
            <Link to='/projects' onClick={closeMobileMenu}>
              <span className="text-white">02.</span>Projects
            </Link>
          </ul>
          <ul>
            <Link to='/experience' onClick={closeMobileMenu}>
              <span className="text-white">03.</span>Experience
            </Link>
          </ul>
          <ul>
            <Link to='/contact' className="nav-links-mobile" onClick={closeMobileMenu}>
              <span className="text-white">04.</span>Contact
            </Link>
          </ul>
        {button && <Resume onClick={showButton}>RESUME</Resume>}
        </NavList>
  </Navbar>
  );
}

export default Nav;
