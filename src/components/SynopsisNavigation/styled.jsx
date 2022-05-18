import {Link } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';

export const SynopsisNavigationWrapper = styled(Slider)`
    bottom:0;
    left:122px;
    width: calc(100% - 162px - 40px - 40px - 2px);
    height: 81px;
    backdrop-filter: blur(18px);
    border-right: 1px solid #99999950;
    border-left: 1px solid #99999950;
    border-top: 1px solid #99999950;
    position: absolute!important;
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

export const SlideButtonLeft = styled.button`
    position: absolute;
    bottom:0;
    top:unset;
    left: 0px;
    z-index: 999;
    right:unset;
    width: 40px;
    height: 60px;
    background-color: transparent;
    color: white;
    transition: 0.2s ease-in-out;
    &:before{
        content:"";
        display: none;
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
    background-color: transparent;
    color: white;
    transition: 0.2s ease-in-out;
    &:before{
        content:"";
        display: none;
    }
`   