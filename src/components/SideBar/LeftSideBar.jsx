import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'



const SideBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    width: 82px;
    border-right: 1px solid #99999950;
    backdrop-filter: blur(18px);
    position: absolute;
    top:0px;
    left:0px;
    z-index: 555;
    padding-top:82px;
`
const SocialMediaList = styled.ul`
    list-style: none;
    width: 100%;

`
const SocialMediaIcon = styled.li`
    width: 100%;
    
`
const SocialMediaLink = styled.a`
    display:inline-block;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;;
    color: white;
    cursor: pointer;
    padding: 18px 0 ;
    &:hover{
        background-color: #9999991d;
    }

`
const BottomText = styled.p`
    font-family: 'Montserrat', sans-serif;
    margin-bottom:200px;
    writing-mode: vertical-rl;
    cursor: default;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    font-size:14px;
`
const LeftSideBar = () => {
  return (
    <SideBarWrapper>
       <SocialMediaList>
            <SocialMediaIcon>
                <SocialMediaLink href={"https://youtube.com"}>
                    <FontAwesomeIcon icon={faYoutube} />
                </SocialMediaLink>
            </SocialMediaIcon>
            <SocialMediaIcon>
                <SocialMediaLink href={"https://twitter.com"}>
                    <FontAwesomeIcon icon={faTwitter} />
                </SocialMediaLink>
            </SocialMediaIcon>
            <SocialMediaIcon>
                <SocialMediaLink href={"https://instagram.com"}>
                    <FontAwesomeIcon icon={faInstagram} />
                </SocialMediaLink>
            </SocialMediaIcon>
       </SocialMediaList>
       <BottomText>Share</BottomText>
    </SideBarWrapper>
  )
}

export default LeftSideBar