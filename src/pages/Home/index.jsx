import React from 'react'
import Layout from '../../Layout'
import Slider from "react-slick";
import BG1 from '../../assets/images/mainBG.jpg'
import { BorderBig , BorderSmall, CircleUp, CircleUnder} from './svg'
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




export const settings = {
  customPaging: function(i) {
    return (
      <CustomPaginationElement>
        {'0' + (i + 1)}
        <ProgressRoundWrap>
        
          <InlineSVG icon={CircleUp} label="Circle" className='CircleUp'/>
        </ProgressRoundWrap>
      </CustomPaginationElement>
    );
  },
  dots: true,
  infinite: true,
  speed: 1500,
  autoplaySpeed: 4000,
  autoplay: true,
  arrows:true,
  fade:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  currentSlide: 0,
  prevArrow:<SlideButtonLeft><FontAwesomeIcon icon={faAngleLeft} /></SlideButtonLeft>,
  nextArrow:<SlideButtonRight><FontAwesomeIcon icon={faAngleRight} /></SlideButtonRight>,
  dotsClass: "slick-dots slick-thumb",
  afterChange: function(currentSlide) {
    console.log('test')
  }
}


const Home = () => {
  const [currentSlideThemeColor, setCurrentSlideThemeColor] = React.useState('#F2F2F2');

  return (
    <>
      <Layout>
        <HeroSection>
          <Slider {...settings}>
            <Slide background={BG1}>
              <Title>INFINITY WAR</Title>
              <SubTitle>world premiere <span>23 april</span> do not wait more</SubTitle>
              <SubTitle2>The most anticipated movie of the year is here</SubTitle2>
              <SlideLink to="/">ver trailer     
                <InlineSVG icon={BorderBig} label="BigBorder" className='border__big'/>
                <InlineSVG icon={BorderSmall} label="SmallBorder" className='border__small'/>
                  {/* <BorderBox1>
                      <span></span>
                      <span></span>
                    </BorderBox1>
                    <BorderBox2>
                      <span></span>
                      <span></span>
                    </BorderBox2> */}
                </SlideLink>
            </Slide>
            <Slide>
              <Title>Thanos</Title>
              <SubTitle>thanos the crazy titan, great t, the thuano, <span>conqueror of worlds </span></SubTitle>
              <SubTitle2>The most anticipated movie of the year is here</SubTitle2>
              <SlideLink to="/">ver trailer
                <InlineSVG icon={BorderBig} label="BigBorder" className='border__big'/>
                <InlineSVG icon={BorderSmall} label="SmallBorder" className='border__small'/>

              </SlideLink>
            </Slide>
            <Slide>
              <h2>3</h2>
            </Slide>
            <Slide>
              <h2>4</h2>
            </Slide>
            <Slide>
              <h2>5</h2>
            </Slide>
          </Slider>

        </HeroSection>
      </Layout>
    </>
  )
}

export default Home


// function startProgressbar() {
//   resetProgressbar();
//   percentTime = 0;
//   isPause = false;
//   tick = setInterval(interval, 10);
// }
// var $rbar = $('.progress circle');
// var rlen = 2 * Math.PI * $rbar.attr('r');
// function interval() {
  
//   percentTime += 1 / (time + 0.1);
//   $bar.css({
//     width: percentTime + '%'
//   });
//   $rbar.css({
//     'stroke-dasharray': rlen,
//     'stroke-dashoffset': rlen * (1 - percentTime / 100)
//   });

//   if (percentTime >= 100) {
//     $slick.slick('slickNext');
//     startProgressbar();
//   }

// }

// function resetProgressbar() {
//   $bar.css({
//    width: 0+'%' 
//   });
//   clearTimeout(tick);
// }

// startProgressbar();
