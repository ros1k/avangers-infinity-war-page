import styled from 'styled-components';
import {Link} from 'react-router-dom'


export const Nav = styled.nav`
     width: 100% ;
     border: 1px solid #99999950;
     border-top:none;
     border-bottom:none;
   
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
    transition: 0.3s ease-in-out;
    position: relative;
    &:hover{
        background-color: #9999991d;
    }
    &:after{
        content: '';
        opacity: ${props => props.active ? 1 : 0}; 
        position: absolute;
        bottom:0;
        left:0;
        width: 100%;
        height: 2px;
        transition: opacity 0.3s ease;
        background-color: #F2F2F2;
        
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