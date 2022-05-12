import styled from 'styled-components';
import {Link} from 'react-router-dom'


export const Nav = styled.nav`
     width: 100% ;
     border: 1px solid #9999995d;
     border-top:none;
     color: red;
     display:flex;
     justify-content: center;
     align-items: stretch;
     position: relative;
`
export const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style: none;
    align-items: stretch;
    position: relative;
`
export const NavItem = styled.li`
    padding: 0 25px;
    height: 100%;
    &:hover{
        background-color: #9999991d;
    }
`
export const NavLink = styled(Link)`
    color: #F1F1F1;
    display: flex;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size:14px;
    width: 100%;
    height: 100%;
   
`