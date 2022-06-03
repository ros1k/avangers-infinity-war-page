import React from 'react'
import styled from 'styled-components'

export const CastMainSlideWrapper = styled.div`
    padding:120px 0 0 80px;
    background-image: url(${props => props.image});
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
`
export const CastName = styled.h2`
    font-size: 80px;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 90px;
    position: relative;
    display: inline-block;
    &:before{
        content:"";
        position: absolute;
        bottom: -35px;
        left: 0px;
        width: 100%;
        height: 2px;
        background-color:white;
        
    }
`
export const CastDescription = styled.p`
    max-width: 400px;
    font-weight: 300;
    text-align: justify;
    margin-bottom: 30px;
`
export const DescImage = styled.img`
    z-index: -1;
    height: 80vh;
`
const CastMainSlide = ({name,desc,descImage}) => {
    const checkDots = desc.split('.');
   
  return (
    <CastMainSlideWrapper >
        <div>
            <CastName>{name}</CastName>
            {checkDots.map((item,index)=>{
                return <CastDescription key={index}>{item}.</CastDescription>
            })}
        </div>
        
       <DescImage src={descImage} 
            alt={name + " image"} 
           />
    </CastMainSlideWrapper>
  )
}

export default CastMainSlide