import React from 'react'
import Layout from '../../Layout'
import Slider from "react-slick";
import BG1 from '../../assets/images/mainBG.jpg'
import { HeroSection,
  Title,Slide,
  SubTitle,
  SubTitle2,
  SlideLink,
  SlideButtonLeft,
  SlideButtonRight,
  BorderBox1,
  BorderBox2,
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
        0{i + 1}
        <ProgressRoundWrap>
          <svg class="progress">
            <circle r="30" cx="60" cy="60"/>
          </svg>
        </ProgressRoundWrap>
      </CustomPaginationElement>
    );
  },
  dots: true,
  infinite: true,
  speed: 500,
  arrows:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  currentSlide: 0,
  prevArrow:<SlideButtonLeft><FontAwesomeIcon icon={faAngleLeft} /></SlideButtonLeft>,
  nextArrow:<SlideButtonRight><FontAwesomeIcon icon={faAngleRight} /></SlideButtonRight>,
  dotsClass: "slick-dots slick-thumb",
 

}

const BorderBig = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="303px" height="77px" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
viewBox="0 0 372.03 94.67"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
 <g id="Warstwa_x0020_1" class="border__big--svg">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <g>
   <polygon fill="#2B2A29" fill-opacity="0.850980" points="35.93,93.49 330.87,93.49 370.2,1.18 1.74,1.18 "/>
   <path id="_1" fill="#D1D0D1" fill-rule="nonzero" d="M330.87 94.67l-294.94 0 0 -2.36 294.94 0 1.14 1.63 -1.14 0.73zm1.14 -0.73l-0.31 0.73 -0.83 0 1.14 -0.73zm39.33 -92.31l-39.33 92.31 -2.28 -0.89 39.33 -92.32 1.14 -0.73 1.14 1.63zm-1.14 -1.63l1.83 0 -0.69 1.63 -1.14 -1.63zm-368.46 0l368.46 0 0 2.36 -368.46 0 -1.16 -0.79 1.16 -1.57zm-1.16 1.57l-0.58 -1.57 1.74 0 -1.16 1.57zm34.19 92.32l-34.19 -92.32 2.32 -0.79 34.18 92.32 -1.15 1.57 -1.16 -0.78zm1.16 0.78l-0.87 0 -0.29 -0.78 1.16 0.78z"/>
  </g>
 </g>
</svg>
`
const BorderSmall= `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="247px" height="76px" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
viewBox="0 0 247.04 77.51"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
 <g id="Warstwa_x0020_1" class="border__small--svg">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <g>
   <polygon fill="#7688A1" fill-opacity="0.949020" points="24.21,76.33 219.36,76.33 245.38,1.18 1.59,1.18 "/>
   <polygon id="_1" fill="none" stroke="#D1D0D1" stroke-width="2" stroke-miterlimit="22.9256" points="24.21,76.33 219.36,76.33 245.38,1.18 1.59,1.18 "/>
  </g>
 </g>
</svg>
`
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
