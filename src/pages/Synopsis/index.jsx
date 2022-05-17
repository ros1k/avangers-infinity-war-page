import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from '../../Layout'
import Slider from "react-slick";
import './customSlider.css'
import image from '../../assets/images/916213.jpg'
import image2 from '../../assets/images/916247.jpg'
import { GemStoneWrapper, GemStoneImageWrapper, GemStoneImage,
  CustomPaginationElement,CustomPaginationElementLink,
  SlideButtonLeft,SlideButtonRight,
  GemStoneDetails, GemStoneSynopsis, GemStoneTitle, GemStoneDescription, GemStoneLink,
  FirstSlider,SynopsisNavigation,

} from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons'
          
      
const Synopsis = () => {

  const SynopsisSettings = {
    dots: false,
    infinite: true,
    speed: 1500,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    currentSlide: 0,
    prevArrow:<SlideButtonLeft ><FontAwesomeIcon icon={faAngleLeft} /></SlideButtonLeft>,
    nextArrow:<SlideButtonRight ><FontAwesomeIcon icon={faAngleRight} /></SlideButtonRight>,
  }
  return (
    <>
        <Layout>
            <FirstSlider>
                <GemStoneWrapper backgroundimage={image}>
                    <GemStoneImageWrapper>
                      <GemStoneImage src={image2} alt="gemstone1" />
                    </GemStoneImageWrapper>
                    <GemStoneDetails>
                        <GemStoneSynopsis>
                            <GemStoneTitle>
                              <strong>Soul</strong> Gem Synopsis
                              </GemStoneTitle>
                            <GemStoneDescription>
                                Infinity War orange sponser designer caracas, consectetur adipiscing elit. 
                                sed do eiusmod tempor incididunt ut labore et dolore.
                              </GemStoneDescription>
                              <GemStoneLink to="/">
                                ver mas
                              </GemStoneLink>
                        </GemStoneSynopsis>
                    </GemStoneDetails>
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
            </FirstSlider>
            <SynopsisNavigation {...SynopsisSettings}>
              <CustomPaginationElement>
                  <CustomPaginationElementLink to={`/synopsis/soul`}>
                      gem
                    </CustomPaginationElementLink>
              </CustomPaginationElement>
              <CustomPaginationElement>
               <CustomPaginationElementLink to={`/synopsis/reality`}>
                  gem
                </CustomPaginationElementLink>
              </CustomPaginationElement>
              <CustomPaginationElement>
                  <CustomPaginationElementLink to={`/synopsis/space`}>
                      gem
                    </CustomPaginationElementLink>
              </CustomPaginationElement>
              <CustomPaginationElement>
                  <CustomPaginationElementLink to={`/synopsis/power`}>
                      gem
                    </CustomPaginationElementLink>
              </CustomPaginationElement>
              <CustomPaginationElement>
                  <CustomPaginationElementLink to={`/synopsis/time`}>
                      gem
                    </CustomPaginationElementLink>
              </CustomPaginationElement>
              <CustomPaginationElement>
                  <CustomPaginationElementLink to={`/synopsis/mind`}>
                      gem
                    </CustomPaginationElementLink>
              </CustomPaginationElement>

            </SynopsisNavigation>
            <Outlet/>
        </Layout>
    </>
  )
}

export default Synopsis