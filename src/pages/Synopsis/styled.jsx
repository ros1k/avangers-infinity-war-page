import styled from 'styled-components';


export const GemStoneWrapper = styled.div`
    background-image: ${props => `url(${props.backgroundimage})`};
    height: 100vh;
`
export const GemStoneImageWrapper = styled.div`
`
export const GemStoneImage = styled.img`
    width: 100px;
    height: 100px;
`
export const CustomPaginationElement = styled.div`

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