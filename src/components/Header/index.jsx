import React from 'react'
import Navigation from '../Navigation';
import styled from 'styled-components';


const TopHeader = styled.header`
 backdrop-filter: blur(22px);
  display:flex;
  justify-content: space-between ;
`
const Logo = styled.div`
  min-height: 80px ;
  min-width: 80px;
  
`

const Hamburger = styled.div`
  min-height: 80px ;
  min-width: 80px;
`

const Header = () => {
  return (
    <TopHeader>
        <Logo></Logo>
        <Navigation />
        <Hamburger></Hamburger>
    </TopHeader>
  )
}

export default Header