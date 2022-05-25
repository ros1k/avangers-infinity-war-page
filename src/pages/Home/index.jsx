import React,{useEffect} from 'react'
import Layout from '../../Layout'
import Slider from "react-slick";
import Image3 from '../../assets/images/wallpaperflare.com_wallpaper2.jpg'
import Image1 from '../../assets/images/95494.jpg'
import Image5 from '../../assets/images/wallpaperflare.com_wallpaper4.jpg'
import Image2 from '../../assets/images/wallpaperflare.com_wallpaper1.jpg'
import Image4 from '../../assets/images/wallpaperflare.com_wallpaper3.jpg'
import { BorderBig , BorderSmall, CircleUp} from './svg'
import { HeroSection,
  Title,Slide,
  SubTitle,
  SubTitle2,
  SlideLink,
  SlideButtonLeft,
  SlideButtonRight,
  ProgressRoundWrap,
  CustomPaginationElement } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons'
import InlineSVG from "inline-svg-react"
import './customSlider.css'

const themeColors = [
  '#5922F7',
  '#5922F7',
  '#FF1216',
  '#5922F7',
  '#FF1216'
]

const Home = () => {
  
  const [currentSlideThemeColor, setCurrentSlideThemeColor] = React.useState(themeColors[0]);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const settings = {
    customPaging: function(i) {
      const progressCircle = <ProgressRoundWrap>
                                <InlineSVG icon={CircleUp} label="Circle" className='CircleUp'/>
                            </ProgressRoundWrap>;
      const progressCircleActive = <ProgressRoundWrap>
                                <InlineSVG icon={CircleUp} label="Circle" className='CircleUp active'/>
                            </ProgressRoundWrap>;
      if(i === currentSlide){
        return (
          <CustomPaginationElement>
               {'0' + (i + 1)}
               {progressCircleActive}
          </CustomPaginationElement>
        )
      }else{
        return (
          <CustomPaginationElement>
               {'0' + (i + 1)}
               {progressCircle}
          </CustomPaginationElement>
        )
      }
    },
    dots: true,
    infinite: true,
    speed: 2500,
    autoplaySpeed: 8000,
    autoplay: true,
    pauseOnHover: false,
    arrows:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    currentSlide: 0,
    prevArrow:<SlideButtonLeft themecolor={currentSlideThemeColor}><FontAwesomeIcon icon={faAngleLeft} /></SlideButtonLeft>,
    nextArrow:<SlideButtonRight themecolor={currentSlideThemeColor}><FontAwesomeIcon icon={faAngleRight} /></SlideButtonRight>,
    dotsClass: "slick-dots slick-thumb slick-dots-home",
    afterChange: function( newIndex) {
      setCurrentSlide(newIndex)
      setCurrentSlideThemeColor(themeColors[newIndex])
 
    }
  }


  return (
    <>
      <Layout>
        <HeroSection>
          <Slider {...settings}>
            <Slide backgroundImage={Image1} themecolor={currentSlideThemeColor}>
              <Title>INFINITY WAR</Title>
              <SubTitle>world premiere <span>23 april</span> do not wait more</SubTitle>
              <SubTitle2>The most anticipated movie of the year is here</SubTitle2>
              <SlideLink to="/" themecolor={currentSlideThemeColor}>ver trailer     
                <InlineSVG icon={BorderBig} label="BigBorder" className='border__big'/>
                <InlineSVG icon={BorderSmall} label="SmallBorder" className='border__small'/>
              </SlideLink>
            </Slide>
            <Slide backgroundImage={Image2} themecolor={currentSlideThemeColor}>
              <Title>Thanos</Title>
              <SubTitle>thanos the crazy titan, great t, the thuano, <span>conqueror of worlds </span></SubTitle>
              <SubTitle2>The most anticipated movie of the year is here</SubTitle2>
              <SlideLink to="/" themecolor={currentSlideThemeColor}>ver trailer
                <InlineSVG icon={BorderBig} label="BigBorder" className='border__big'/>
                <InlineSVG icon={BorderSmall} label="SmallBorder" className='border__small'/>
              </SlideLink>
            </Slide>
            <Slide backgroundImage={Image3} themecolor={currentSlideThemeColor}>
              <Title>Doctor Strange</Title>
              <SubTitle>Very soon everything will be at stake the <span>Destiny of the Human</span> race will be lived</SubTitle>
              <SubTitle2>The most anticipated movie of the year is here</SubTitle2>
              <SlideLink to="/" themecolor={currentSlideThemeColor}>ver trailer
                <InlineSVG icon={BorderBig} label="BigBorder" className='border__big'/>
                <InlineSVG icon={BorderSmall} label="SmallBorder" className='border__small'/>
              </SlideLink>
            </Slide>
            <Slide backgroundImage={Image4} themecolor={currentSlideThemeColor}>
              {/* <Title></Title> */}
              <SubTitle>New teams come togheter under<span>Imminent threat</span></SubTitle>
              <SubTitle2>The most anticipated movie of the year is here</SubTitle2>
              <SlideLink to="/" themecolor={currentSlideThemeColor}>ver trailer
                <InlineSVG icon={BorderBig} label="BigBorder" className='border__big'/>
                <InlineSVG icon={BorderSmall} label="SmallBorder" className='border__small'/>
              </SlideLink>
            </Slide>
            <Slide backgroundImage={Image5} themecolor={currentSlideThemeColor}>
              {/* <Title></Title> */}
              <SubTitle>You need to leave something back to <span>advance </span></SubTitle>
              <SubTitle2>The most anticipated movie of the year is here</SubTitle2>
              <SlideLink to="/" themecolor={currentSlideThemeColor}>ver trailer
                <InlineSVG icon={BorderBig} label="BigBorder" className='border__big'/>
                <InlineSVG icon={BorderSmall} label="SmallBorder" className='border__small'/>
              </SlideLink>
            </Slide>
          </Slider>
        </HeroSection>
      </Layout>
    </>
  )
}

export default Home
