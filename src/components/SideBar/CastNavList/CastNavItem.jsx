import React,{useState, useContext, useEffect} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {CastContext} from '../../../context/castContext'

export const ListItem = styled.li`
    writing-mode: vertical-rl;
    text-orientation: mixed;
    display: flex;
    flex-grow: 1;
    position: relative;
    transition: 0.5s linear;
    &.active{
        background-color: ${props => props.ctt === "single" ? props.ct : `linear-gradient(90deg, ${props => props.ct + 'aa'} 0%, ${props => props.cg + 'aa'} 110%);`};
    }

`
export const ListButton = styled(Link)`
    display: flex;
    justify-content:center;
    align-items: center;
    text-decoration: none;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    background-color: transparent;
    color:white;
    text-transform: uppercase;
    font-weight: 400;
    justify-content: center;
    letter-spacing: 2px;
    font-size:14px;
    width: 100%;
    height: 100%;

`
const CastNavItem = ({index,name}) => {
    const values = useContext(CastContext);
    const { colorThemeType,colorTheme,colorGradient,currentSubPage,setCurrentSubPage } = values;
    const [currentPage, setCurrentPage] = useState(false);


    useEffect(()=>{
        currentSubPage === index ? setCurrentPage(true) : setCurrentPage(false);
    },[currentSubPage])
    const handleClick = (e) => {
      e.preventDefault();
      setCurrentSubPage(index);      
    }


  return (
    <ListItem className={currentPage ? "active" : ""} ctt={colorThemeType} ct={colorTheme} cg={colorGradient}>
          <ListButton className={currentPage ? "active" : ""} to="" onClick={handleClick} >{name}</ListButton>
    </ListItem>
  )
}

export default CastNavItem