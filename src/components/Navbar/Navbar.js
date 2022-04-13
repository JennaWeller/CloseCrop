import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {Link} from 'react-router-dom'; 
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  CartIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from './Navbar.elements';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
             <NavIcon/>
              BROOKE'S BAKERY
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/cakes' onClick={closeMobileMenu}>
                  Cakes
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/products' onClick={closeMobileMenu}>
                  Custom Orders
                </NavLinks>
              </NavItem>
              <NavItem>
              <Link to='/cart' onClick={closeMobileMenu} >
               <CartIcon></CartIcon> 
              </Link>
                
              </NavItem>

              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/placeOrder'>
                    <Button primary>Place an Order</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/placeOrder'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Place an Order
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;