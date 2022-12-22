import styled , {css} from "styled-components/macro";
import {Link} from "react-router-dom";
import {FaBars} from "react-icons/fa";
import { FaMagento } from 'react-icons/fa';


export const Nav = styled.nav`
 height:50px;
 display: flex;
 justify-content: space-between;
 padding: 1rem 1rem;
 position: fixed;
 top:0 ;
 z-index: 100;
 width: 100%;
 background-color:#000d1a ;
 `;

export const NavLink = css`
color: #fff;
display: flex;
align-items: center;
padding: 0rem 1rem;
height: 100%;
cursor: pointer;
text-decoration: none;
`;

export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
  font-size: 20px;
`;

export const Logo = styled(Link)`
${NavLink}
font-style: italic;
`;

export const MenuBars = styled(FaBars)`
 display: none;

 @media screen and (max-width: 768px){
     display: block;
     height: 30px;
     width: 30px;
     cursor: pointer;
     position: absolute;
     top: 0;
     right: 0;
     transform: translate(-50%, 35%);
     color: #fff;
 }
 `;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -48px;

@media screen and (max-width: 768px){
     display: none;
 }
`;

export const NavMenuLinks = styled(Link)`
${NavLink}
`;

export const NavButton = styled.div`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px){
     display: none;
 }
`;

