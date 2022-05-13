import React from 'react'
import Navigation from '../Navigation';
import { TopHeader, LogoWrapper, Hamburger } from './styled';
import Logo from '../../assets/images/Logo.png';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <TopHeader>
        <LogoWrapper>
            <Link to="/">
              <img src={Logo} alt="Logo Avengers" />
            </Link>
        </LogoWrapper>
        <Navigation />
        <Hamburger></Hamburger>
    </TopHeader>
  )
}

export default Header