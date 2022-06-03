import React from 'react'
import styled from 'styled-components'


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
export const CastNavList = styled.ul`
    list-style: none;
    padding: 0; 
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`
export const CastNavItem = styled.li`
    writing-mode: vertical-rl;
    text-orientation: mixed;
    display: flex;
    flex-grow: 1;
    text-transform: uppercase;
    font-weight: 400;
    justify-content: center;
    letter-spacing: 2px;
    font-size:14px;
`

const RightSideBar = ({showButtons}) => {
  return (
    <SideBarWrapper>
      {showButtons &&
        
          <CastNavList>
            <CastNavItem>Summary</CastNavItem>
            <CastNavItem>History</CastNavItem>
            <CastNavItem>Poster</CastNavItem>
            <CastNavItem>design</CastNavItem>
          </CastNavList>
        


      }
    </SideBarWrapper>

    
  )
}

export default RightSideBar