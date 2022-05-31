import React from 'react'
import styled from 'styled-components'

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 250px;
  height: 150px;
  padding: 20px 0 20px 25px;
  text-transform: uppercase;
  background-image: url(${props => props.image});
  position: relative;
  &:before{
    position: absolute;
    content: '';
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(90deg, rgba(0,0,0,75) 0%, rgba(0,0,0,75) 75%);
    z-index: -1;
  }
  &:first-child:before{

    background-image: linear-gradient(90deg, ${props => props.colorTheme + '75'} 0%, rgba(0,0,0,0) 75%);
  }
  &:first-child:after{
    content:"";
    position: absolute;
    top:0;
    left:0px;
    width: 10px;
    height: 100%;
    background-color: ${props => props.colorTheme};
  }
  `

const CastNavItem = ({colorThemeType,colorTheme,colorGradient,name,image}) => {
  
  
  
  return (
    <Item 
      colorThemeType={colorThemeType}
      colorTheme={colorTheme}
      colorGradient={colorGradient}
      image={image}
    >
        {name}
      </Item>
  )
}

export default CastNavItem