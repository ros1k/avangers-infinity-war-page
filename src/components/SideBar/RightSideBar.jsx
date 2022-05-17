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
    font-size:0px;
    z-index: 555;
    padding-top:82px;

`


const RightSideBar = () => {
  return (
    <SideBarWrapper>
       <div>RightSideBar</div>
    </SideBarWrapper>

    
  )
}

export default RightSideBar