import React from 'react'
import Layout from 'Layout'
import { Outlet } from 'react-router-dom'
import {castAvengers} from '../../helpers/db/cast'
import {CastWrapper} from './styled'
import Slider from 'react-slick'
import styled from 'styled-components'
import image from '../../assets/images/wallpaperflare.com_wallpaper1.jpg'
import CastSliderDots from '../../components/CastNavFor'
import CastMainSlide from '../../components/CastMainSlide'

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
   
  }
`

export const MainSlider = styled(Slider)`
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  padding:80px 80px 0 380px;
  z-index: -1;
`
const Cast = () => {
  const NavSlider = React.useRef(null);
  const CastSlider = React.useRef(null);
  const [active,setActive] = React.useState(0);

  const navSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    fade: false,
    vertical:true,
    draggable:true,
    focusOnSelect: true,
    afterChange: (index) => {
      setActive(index);
    }
  }
  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    fade: true,
    vertical:false,
  }
  
  return (
    <>
      <Layout hide={true}>
          <CastWrapper>
              <CastCustomNavigation 
                {...navSettings}
                asNavFor={CastSlider.current}
                ref={NavSlider}
              >
                {castAvengers.Avengers.map((cast,id) => {
                    return (
                      <CastSliderDots
                        className={id == active ? 'current' : ''}
                        key={id}
                        index={id}
                        colorThemeType={cast.colorThemeType}
                        colorTheme={cast.colorTheme}
                        colorGradient={cast.colorGradient}
                        name={cast.name}
                        image={image}
                        onClick={() => {}}
                      />
                    )
                  })}
              </CastCustomNavigation>
              <MainSlider 
                {...sliderSettings}
                ref={CastSlider}
              >
                {castAvengers.Avengers.map((cast,id) => {
                  return (
                    <CastMainSlide
                      index={id}
                      key={id}
                      colorThemeType={cast.colorThemeType}
                      colorTheme={cast.colorTheme}
                      colorGradient={cast.colorGradient}
                      name={cast.name}
                      image={image}
                      desc={cast.description}
                      />
                  )
                })}
              </MainSlider>
            {/* <Outlet /> */}
          </CastWrapper>
          
          
      </Layout>
    </>
  )
}

export default Cast