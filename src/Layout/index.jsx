import React from 'react'
import Header from '../components/Header'
import LeftSideBar from '../components/SideBar/LeftSideBar'
import RightSideBar from '../components/SideBar/RightSideBar'
import styled from 'styled-components'
        

const TopWrapper = styled.div`
    position: absolute;
    width: 100%;
    z-index: 999;
`

const Layout = ({children, hide}) =>{
  
    return(
        <>
        <TopWrapper>
            <Header/>
            <LeftSideBar hide={hide}/>
            <RightSideBar/>
        </TopWrapper>
        <main>
            {children}
        </main>
        </>
    )
}

export default Layout