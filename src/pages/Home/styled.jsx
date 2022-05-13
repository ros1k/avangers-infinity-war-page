import styled from 'styled-components'
import { Link } from 'react-router-dom';


export const HeroSection = styled.div`
  height: 100vh;
  padding: 80px 82px 0 82px;
`

export const Slide = styled.div`
  padding-top:150px;
  display: flex!important;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`
export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 5px;
  font-size:120px;
  position: relative;
  margin-bottom: 80px;
  display: inline-block;
  text-align: center;
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
    span{
        font-weight: 600;
    }
`
export const SubTitle2 = styled.p`
    font-size: 22px;
    font-weight: 300;
    margin-bottom:60px;
`
export const SlideLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  position: relative;
  width: 300px;
  display: inline-block;
  text-align: center;
  padding: 10px 0;
  font-size:14px;
  letter-spacing:1px;
`

export const SlideButtonLeft = styled.button`
    position: absolute;
    bottom:0;
    top:unset;
    left: -42px;
    z-index: 999;
    right:unset;
    width: 40px;
    height: 60px;
    background-color: black;
    color:white;
    transition: 0.2s ease-in-out;
    &:hover{
        color:white;
        background-color: #5922F7;
    }
    &:before{
        display: none;
    }

`
export const SlideButtonRight = styled.button`
    position: absolute;
    bottom:0;
    top:unset;
    left: 0px;
    z-index: 999;
    right:unset;
    width: 40px;
    height: 60px;
    background-color: black;
    color: white;
    transition: 0.2s ease-in-out;
    &:hover{
        color:white;
        background-color: #5922F7;
    }
    }
    &:before{
        display: none;
    }
`

export const BorderBox1 = styled.div`
    width: 100%;
    height: 50px;
    position: absolute;
    top:-5px;
    left:0;
    &:before{
        content:"";
        position: absolute;
        bottom:-3px;
        left:15px;
        width:2px;
        height:130%;
        background-color: #99999930;
        transform: rotateZ(-27deg);
    }
    &:after{
        content:"";
        position: absolute;
        bottom:-3px;
        right:15px;
        width:2px;
        height:130%;
        background-color: #99999930;
        transform: rotateZ(27deg);
    }
    span:nth-child(1){
        display: inline-block;
        width: 100%;
        border-bottom:2px solid #99999930;
        position: absolute;
        top:-10px;
        left:0;
    }
    span:nth-child(2){
        display: inline-block;
        width: 80%;
        border-bottom:2px solid #99999930;
        position: absolute;
        bottom:0;
        left:10%;
    }
`
export const BorderBox2 = styled.div`
    width: 90%;
    height: 50px;
    position: absolute;
    top:5px;
    left:5%;
    &:before{
        content:"";
        position: absolute;
        bottom:-3px;
        left:15px;
        width:2px;
        height:130%;
        background-color: #99999930;
        transform: rotateZ(-27deg);
    }
    &:after{
        content:"";
        position: absolute;
        bottom:-3px;
        right:15px;
        width:2px;
        height:130%;
        background-color: #99999930;
        transform: rotateZ(27deg);
    }
    span:nth-child(1){
        display: inline-block;
        width: 100%;
        border-bottom:2px solid #99999930;
        position: absolute;
        top:-10px;
        left:0;
    }
    span:nth-child(2){
        display: inline-block;
        width: 80%;
        border-bottom:2px solid #99999930;
        position: absolute;
        bottom:0;
        left:10%;
    }
    
`