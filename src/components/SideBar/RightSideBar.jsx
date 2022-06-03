import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CastContext } from '../../context/castContext'

import CastNavList from './CastNavList'

const SideBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    width: 82px;
    border-left: 1px solid #99999950;
    backdrop-filter: blur(18px);
    position: absolute;
    top:0px;
    right:0px;

    z-index: 555;
    padding-top:82px;

`



const RightSideBar = ({showButtons}) => {
  const values = useContext(CastContext);
  const { colorThemeType,colorTheme,colorGradient,currentSubPage,setCurrentSubPage } = values;
  
  const handleClick = (e) => {
    e.preventDefault();
    setCurrentSubPage(e.target.attributes[0].value);
    e.current.classList.add('active');
  }


  return (
    <SideBarWrapper>
      {showButtons &&
          <CastNavList/>
      }
    </SideBarWrapper>

    
  )
}

export default RightSideBar