import styled, { keyframes } from 'styled-components'
import {Link } from 'react-router-dom';
import Slider from 'react-slick';

export const SynopsisChild = styled.div`
    height: 100vh;
    padding-bottom:81px;
    background-color: ${props => props.themeColor};
`
export const SynopsisNavigation = styled(Slider)`
    position: absolute;
    bottom:0;
    left:122px;
    width: calc(100% - 162px - 40px - 40px - 2px);
    height: 81px;
    backdrop-filter: blur(18px);
    border-right: 1px solid #99999950;
    border-left: 1px solid #99999950;
    border-top: 1px solid #99999950;
`
export const CustomPaginationElement = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`
export const CustomPaginationElementLink = styled(Link)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color:white;
    text-transform: uppercase;
    font-size: 14px;
    
`
export const GemStoneWrapper = styled.div`
    background-image: ${props => `url(${props.backgroundimage})`};
    height: 100vh;
    padding: 80px 80px 80px 80px;
    width: 100%;
    position: relative;
    display: flex!important;
   
`
export const GemStoneImageWrapper = styled.div`
    display:none;
`
export const GemStoneImage = styled.img`
    width: 100px;
    height: 100px;
`

export const SlideButtonLeft = styled.button`
    position: absolute;
    bottom:0;
    top:unset;
    left: 40px;
    z-index: 999;
    right:unset;
    width: 40px;
    height: 60px;
    background-color: transparent;
    color: white;
    transition: 0.2s ease-in-out;
`
export const SlideButtonRight = styled.button`
    position: absolute;
    bottom:0;
    top:unset;
    left: 82px;
    z-index: 999;
    right:unset;
    width: 40px;
    height: 60px;
    background-color: transparent;
    color: white;
    transition: 0.2s ease-in-out;
`    

export const GemStoneDetails = styled.div`
 
   height:100%;
   max-height: 100%;
   position: relative;
`
export const GemStoneSynopsis = styled.div`
    background-color: #2020208a;
    max-width: 400px;
    padding: 20px 30px;
    position: relative;   
    margin:50px;
    z-index: 10;
    &:before{
        content: '';
        position: absolute;
        top:2px;
        left:30px;
        width: 30px;
        height: 4px;
        background-color: orange;
    }
`
export const GemStoneTitle = styled.div`
    text-transform: uppercase;
    font-size:20px;
    margin-bottom: 20px;
`
export const GemStoneDescription = styled.p`
    font-size:12px;
    margin-bottom: 20px;
`
export const LinkHoverAnimation = keyframes`
    0%{
        width: 0%;
    }
    100%{
        width: 100%;
    }  
`

export const GemStoneLink = styled(Link)`
    text-transform: uppercase;
    color:white;
    font-size:14px;
    text-decoration: none;
    position: absolute;
    bottom: -20px;
    right: 20px;
    border-width: 2px;
    border-style: solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(
      to right, 
      #ffab00, 
      #ff6f00
    );
    padding: 10px 50px;
    &:before{
        content:"";
        position: absolute;
        bottom: 0;
        left:0;
        width: 100%;
        height: calc(50% - 1px);
        background-color: #2020208a;
        z-index: -2;
    }
    &:after{
        content:"";
        top:0;
        left:0;
        width: 0;
        height: 100%;
        background: linear-gradient(90deg, rgba(255,171,0,1) 0%, rgba(255,111,0,1) 100%);
        position: absolute;
        z-index: -1;
        transition: 0.3s ease-in-out;
    }
    &:hover:after{
       width: 100%;
    }
    
`
