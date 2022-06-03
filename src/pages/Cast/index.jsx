import React from 'react'
import Layout from '../../Layout'

import {castAvengers} from '../../helpers/db/cast'
import {CastWrapper, CastNavList, CastCustomNavigation , MainSlider} from './styled'

import image from '../../assets/images/wallpaperflare.com_wallpaper1.jpg'
import CastSliderDots from '../../components/CastNavFor'
import CastMainSlide from '../../components/CastMainSlide'
import { CastProvider } from '../../context/castContext'


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
    },
    beforeChange: (current, next) => {

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
      <CastProvider>
        <Layout hide={true} showButtons={true}>
            <CastWrapper bg={castAvengers.Avengers[active].bgImage}>
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
                          image={cast.navImage}
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
                        descImage={cast.descImage}
                        desc={cast.description}
                        />
                    )
                  })}
                </MainSlider>
              {/* <Outlet /> */}
            </CastWrapper>
        </Layout>
      </CastProvider>
    </>
  )
}

export default Cast