import styled, { keyframes } from 'styled-components'
import {Link } from 'react-router-dom';


export const SynopsisChild = styled.div`
    height: 100vh;
    padding-bottom:81px;
    background-color: ${props => props.themeColor};
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



export const GemStoneDetails = styled.div`
   width:100%; 
   height:100%;
   max-height: 100%;
   position: relative;
   display: flex;
   justify-content: space-between;
`
export const GemStoneSynopsis = styled.div`
    background-color: #2020208a;
    max-width: 400px;
    padding: 20px 30px;
    position: relative;   
    margin:50px;
    z-index: 10;
    max-height:150px;
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
        top:-2px;
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
export const GemStoneHistory = styled(GemStoneSynopsis)`
    align-self: flex-end;   
    &:before{
        background-color: #d2d2d2;
    }
`
export const GemStoneSecondLink = styled(GemStoneLink)`
    border-image-source: linear-gradient(
      to right, 
      #d2d2d2, 
      #d2d2d2
    );
    &:after{
        background: linear-gradient(90deg,#d2d2d2 0%, #a5a5a5 100%);
    }
`