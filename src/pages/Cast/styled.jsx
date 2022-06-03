import styled from 'styled-components'
import Slider from 'react-slick'

export const CastWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 80px 80px 0 80px;
    background-image: url(${props => props.bg});
    &:after{
        content:"";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.7);
        backdrop-filter: hue-rotate(50deg) brightness(120%) contrast(120%);

    }
`
export const CastNavList = styled.ul`
  display: flex!important;;
  flex-direction: column;
  justify-content: flex-start!important;
  align-items: flex-start!important;
  margin: 0;

  list-style: none;
`
export const CastCustomNavigation = styled(Slider)`
  max-width: 300px;
  position: relative;
  height: 100%;
  z-index: 2;
  .slick-slider{
    max-width: 300px;
    position: relative;
    height: 100%;
   
  }
  .slick-list{
    height: 100%!important;
  }
  .slick-slide{
    height: calc((100vh - 80px) / 5);
    border: none;
  }
`

export const MainSlider = styled(Slider)`
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  padding:80px 80px 0 380px;
  z-index: 1;
`