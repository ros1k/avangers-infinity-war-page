import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom';



export const HeroSection = styled.div`
  height: 100vh;

`

export const Slide = styled.div`
  padding: 150px 80px 0 80px;
  display: flex!important;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-image: ${props => props.backgroundImage ? `url(${props.backgroundImage})` : 'none'};
  background-size: cover;
  position: relative;
  &:after{
    content: '';
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.25;
    position: absolute;
    top:0;
    left:0;
    z-index: 1;
  }
`
export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 5px;
  font-size:120px;
  position: relative;
  margin-bottom: 80px;
  display: inline-block;
  text-align: center;
  z-index: 2;
  &:after{
    content:"";
    position: absolute;
    bottom: -30px;
    left:0;

    width: 100%;
    height: 10px;
    background-color: #F2F2F2;
  }
`
export const SubTitle = styled.p`
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 30px;
    z-index: 2;
    span{
        font-weight: 600;
    }
`
export const SubTitle2 = styled.p`
    font-size: 22px;
    font-weight: 300;
    margin-bottom:60px;
    z-index: 2;
`
export const SlideLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  position: relative;
  z-index: 2;
  width: 300px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  font-size:14px;
  letter-spacing:1px;
  &:hover .border__big{
    top:-5px;

    polygon{
        fill: ${props => props.themecolor};
        fill-opacity: 100%;
    }
    path{
        fill: ${props => props.themecolor};
    }
  }
  &:hover .border__small{
    top:-5px;
    polygon{
        fill: ${props => props.themecolor};
        fill-opacity: 100%;
        stroke: ${props => props.themecolor};
    }
    path{
        fill: ${props => props.themecolor};
    }
  }
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
    background-color: ${props => props.themecolor };
    color:white;
    transition: 0.2s ease-in-out;
    transition: background-color 0.3s ease-in-out;
    &:hover{
        color:white;
        background-color: black;
    }
    &:before{
        display: none;
    }
    &:active,&:focus{
        color:white;
        background-color: ${props => props.themecolor };
    }
    &:active:hover,&:focus:hover{
        &:hover{
        color:white;
        background-color: black;
        }
    }

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
    background-color: black;
    color: white;
    transition: 0.2s ease-in-out;
    &:hover{
        color:white;
        background-color: ${props => props.themecolor };
    }
    &:before{
        display: none;
    }
    &:active,&:focus{
        color:white;
        background-color: black;
    }
    &:active:hover,&:focus:hover{
        &:hover{
        color:white;
        background-color: ${props => props.themecolor };
        }
    }
`
export const CircleAnimation = keyframes`
    0%{
        opacity:0;

    }
    1%{
        opacity:1;
    }
    100%{
        stroke-dashoffset: 0;
    }

`
export const BackgroundCircle = keyframes`
    0%{
        opacity:0;
    }
    50%{
        
    }
    100%{
        opacity:1;
    }
`
export const ProgressRoundWrap = styled.div`
    position: absolute;
    left:-3px;
    width: 60px;
    height: 60px;
    .CircleUp{
        position: absolute;
        top:-2px;
        left:-5px;
        transform: rotateZ(-90deg);
        .background-circle{
            opacity:0;
        }
        .progress-circle {
            stroke-dasharray: 227;
            stroke-dashoffset: 227; 
        }
        &.active{
            .background-circle{
                animation: ${BackgroundCircle} 2s linear forwards;
            }
            .progress-circle {
                animation: ${CircleAnimation} 18s linear;
            }
        }
        
        
    }
    
`
export const CustomPaginationElement = styled.div`
    margin: 15px 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:15px;
    letter-spacing: 2px;
    font-size:12px;
    font-stretch: wider;
`