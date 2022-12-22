import React from 'react';
import { menuData } from '../../data/MenuData';
import {Nav, Logo, MenuBars, NavMenu, NavMenuLinks, NavButton, SocialIcon} from "./NavbarStyle";
import { Button } from './ButtonStyle';

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo to="/"> <SocialIcon/>FINDER</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {menuData.map((item, index) => {
                    return(
                        <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                        </NavMenuLinks>
                    )
                })}
            </NavMenu>
            <NavButton>
                <Button to="/contact" primary="true">Contact Us</Button>
            </NavButton>
        </Nav>
    )
}

export default Navbar
