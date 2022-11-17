import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './MenuItems';
import { FaBars } from 'react-icons/fa';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/.'>
                        <NavLinks to='/'>
                            <img src={require('../../images/vt logo.jpg')} alt="logo"/></NavLinks>
                    </NavLogo> 
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='Solar'>Renewable Energy</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='Security'>Security</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks to='Smart Home'>Home Automation</NavLinks>
                        </NavItem>
                    </NavMenu>

                        <NavBtn>
                            <NavBtnLink to="/Collab">Collab</NavBtnLink>
                        </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
