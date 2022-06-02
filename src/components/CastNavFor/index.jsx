import React from 'react'
import styled,{keyframes} from 'styled-components'

export const hoverItemAnimation = keyframes`
  0% {
    background: linear-gradient(90deg, ${props => props.colorTheme + 'dd'} 0%, rgba(0,0,0,0) 110%);

  }
  100% {
    background: linear-gradient(90deg, #000000dd 0%, rgba(0,0,0,75) 120%);
  }

`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  padding: 20px 0 20px 25px;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:after{
    content:"";
    position: absolute;
    top:0;
    left: -10px;
    width: 10px;
    height: 100%;
    background-color: ${props => props.colorTheme};
    transform: 0.8s ease-in-out;
  }
  &:first-child h3{ // active class change later
    font-weight: 600;
  }
  &:hover div {
      &:after{
        opacity: 0;
      }
      &:before{
        background: linear-gradient(90deg, ${props => props.colorTheme + 'aa'} 0%, rgba(0,0,0,0) 110%);
        opacity: 1;
      }
  }
  &.current{
    &:after{
      left:0;
    }
    div{
      &:after{
        opacity: 0;
      }
      &:before{
        
        opacity: 1;
      }
    }
  }
`
export const ItemBgColor = styled.div`
   position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    z-index:-1;
    &:after{
      content: '';
      position: absolute;
      top:0;
      left:0;
      width: 100%;
      height: 100%;
      opacity:1;
      z-index: 1;
      background-image: linear-gradient(90deg, #000000dd 0%, rgba(0,0,0,75) 120%);
      transition: 1s linear;
    }
    &:before{
      content: '';
      position: absolute;
      top:0;
      left:0;
      opacity:0;
      width: 100%;
      height: 100%;
      z-index: 1;
      transition: 0.4s linear;
      background: linear-gradient(90deg, ${props => props.colorTheme + 'aa'} 0%, rgba(0,0,0,0) 110%);
    }
    &.current {
      &:after{
        opacity: 0;
      }
      &:before{
        opacity: 1;
      }
    }
    
`
export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top:0;
  left:0;
  z-index: -2;
`
export const ItemName = styled.h3`
  font-weight: 400;
  z-index: 1;
`
const CastSliderDots = ({colorThemeType,colorTheme,colorGradient,name,image,className}) => {
  
  return (
    <Item 
      colorThemeType={colorThemeType}
      colorTheme={colorTheme}
      colorGradient={colorGradient}
      image={image}
      className={className}
    >
      <ItemBgColor colorThemeType={colorThemeType}  colorTheme={colorTheme} colorGradient={colorGradient}/>
      <ItemImage src={image} alt="" />
        <ItemName>{name}</ItemName>
      </Item>
  )
}

export default CastSliderDots