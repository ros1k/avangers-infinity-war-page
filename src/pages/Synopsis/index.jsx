import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from '../../Layout'
import Slider from "react-slick";
import image from '../../assets/images/916213.jpg'
import image2 from '../../assets/images/916247.jpg'
import { GemStoneWrapper, GemStoneImageWrapper, GemStoneImage,
  CustomPaginationElement,
  SlideButtonLeft,SlideButtonRight} from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons'
          

         
const Synopsis = () => {

  const settings = {
    customPaging: function(i) {
        return (
          <CustomPaginationElement>
               gem
          </CustomPaginationElement>
        )
    },
    dots: true,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 4000,
    autoplay: true,
    arrows:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    currentSlide: 0,
    prevArrow:<SlideButtonLeft ><FontAwesomeIcon icon={faAngleLeft} /></SlideButtonLeft>,
    nextArrow:<SlideButtonRight ><FontAwesomeIcon icon={faAngleRight} /></SlideButtonRight>,
    dotsClass: "slick-dots slick-thumb",
    afterChange: function( newIndex) {
      
 
    }
  }
  return (
    <>
        <Layout>
            <Slider {...settings}>
                <GemStoneWrapper backgroundimage={image}>
                    <GemStoneImageWrapper>
                      <GemStoneImage src={image2} alt="gemstone1" />
                    </GemStoneImageWrapper>
                </GemStoneWrapper>
                <GemStoneWrapper backgroundimage={image2}>
                    <GemStoneImageWrapper>
                      <GemStoneImage src={image} alt="gemstone1" />
                    </GemStoneImageWrapper>
                </GemStoneWrapper>
                <GemStoneWrapper backgroundimage={image2}>
                    <GemStoneImageWrapper>
                      <GemStoneImage src={image} alt="gemstone1" />
                    </GemStoneImageWrapper>
                </GemStoneWrapper>
            </Slider>
            <Outlet/>
        </Layout>
    </>
  )
}

export default Synopsis