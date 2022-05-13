import React from 'react'

import {Nav, NavList, NavItem, NavLink} from './styled'



const Navigation = () => {




    
  return (
    <Nav>
        <NavList>
            <NavItem active>
                <NavLink to="/" >Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/synopsis">Synopsis</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/cast">Cast</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/gallery">Gallery</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/trailer">Trailer</NavLink>
            </NavItem>
        </NavList>
    </Nav>
  )
}

export default Navigation