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
    &:hover{
        background-color: #99999950;
    }
`

export const SlideButtonLeft = styled.button`
    position: absolute;
    top: unset;
    right:unset;
    bottom:-39px;
    left: -41px;
    z-index: 999;
    width: 40px;
    height: 80px;
    background-color: transparent;
    color: white;
    transition: 0.2s ease-in-out;
    border-top:1px solid #99999950;
    &:before{
        content:"";
        display: none;
    }
    &:hover{
        background-color: #9999991d;
        color:white;
    }
`
export const SlideButtonRight = styled(SlideButtonLeft)`
    right: -41px;
    left: unset;
`   