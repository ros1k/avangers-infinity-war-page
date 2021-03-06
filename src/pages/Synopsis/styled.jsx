import styled, { keyframes } from 'styled-components'
import Modal from 'react-modal';

export const SynopsisChild = styled.div`
    height: 100vh;
    padding-bottom:81px;
    background-color: ${props => props.themeColor};
`

export const GemStoneWrapper = styled.div`
    background-image: ${props => `url(${props.backgroundimage})`};
    background-blend-mode: color-burn;
    background-size: cover;

    height: 100vh;
    padding: 80px 80px 80px 80px;
    width: 100%;
    position: relative;
    display: flex!important;
   
`
export const GemStoneImageWrapper = styled.div`
    display:none;
    position: absolute;
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
        top:0px;
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

export const GemStoneButton = styled.button`
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
        top:0px;
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
export const GemStoneSecondLink = styled(GemStoneButton)`
    border-image-source: linear-gradient(
      to right, 
      #d2d2d2, 
      #d2d2d2
    );
    &:after{
        background: linear-gradient(90deg,#d2d2d2 0%, #a5a5a5 100%);
    }
`
export const GauntletDetails = styled(GemStoneDetails)`
    padding: 80px;
    display: flex;
    min-height: 100%;
    padding-bottom:100px;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: row;
    height: 100%;
    background-position: center;
    background-image: url(${props => props.bgImage});

`
export const GauntletSynopsis = styled(GemStoneSynopsis)`
    align-self: flex-end;
    background-color: transparent;
    width: 350px;
    padding:0;
   
    &:before{
        display: none;
    }
`
export const GauntletHistory = styled(GauntletSynopsis)`
    
    margin-left: 200px;
`
export const GauntletButton = styled.button`
    text-decoration:none;
    color:white;
    text-transform: uppercase ;
    font-size:12px;
    width: 100px;
    background-color: transparent;
    padding: 10px 0;
    border:none;
    text-align: left;
    cursor:pointer;
`
export const GauntletSecondButton = styled(GauntletButton)``
export const GauntletTitle = styled(GemStoneTitle)`
    margin-bottom: 33px;
    font-size:18px;
    margin-left: 10px;
    position: relative;
    &:before{
        content:"";
        position: absolute;
        top:-2px;
        left:-10px;
        width: 150px;
        height: 16px;
        background-color: #25252544;
        z-index: -1;
    }
   
`
export const GauntletDescription = styled(GemStoneDescription)`
    position: relative;
     &:after{
        content: '';
        position: absolute;
        top:-20px;
        left:0;
        height: 3px;
        width: 30px;
        background-color: orange;
    }
`
export const StyledModal = styled(Modal)`
   
    &.modal-open{
      
    }
`