import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

import logo from '../duck.png'

const bars = document.getElementById('bars');
const mobileMenu = document.getElementById('mobileMenu');
bars.addEventListener('click', function() {
  mobileMenu.classList.toggle('active')
})

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logo} alt='logo' width="80px"/>
          <h1>TAMS | CSO</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Blog
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Commitees
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>HackTAMS</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
