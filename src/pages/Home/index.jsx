import React from 'react'
import Layout from '../../Layout'
import Slider from "react-slick";
import { HeroSection,
  Title,Slide,
  SubTitle,
  SubTitle2,
  SlideLink,
  SlideButtonLeft,
  SlideButtonRight,
  BorderBox1,
  BorderBox2 } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons'


import './customSlider.css'

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  currentSlide: 0,
  prevArrow:<SlideButtonLeft><FontAwesomeIcon icon={faAngleLeft} /></SlideButtonLeft>,
  nextArrow:<SlideButtonRight><FontAwesomeIcon icon={faAngleRight} /></SlideButtonRight>,

}


const Home = () => {
  return (
    <>
      <Layout>
        <HeroSection>
          <Slider {...settings}>
            <Slide>
              <Title>INFINITY WAR</Title>
              <SubTitle>world premiere <span>23 april</span> do not wait more</SubTitle>
              <SubTitle2>The most anticipated movie of the year is here</SubTitle2>
              <SlideLink to="/">ver trailer
                <BorderBox1>
                    <span></span>
                    <span></span>
                  </BorderBox1>
                  <BorderBox2>
                    <span></span>
                    <span></span>
                  </BorderBox2>
                </SlideLink>
            </Slide>
            <Slide>
              <Title>Thanos</Title>
              <SubTitle>thanos the crazy titan, great t, the thuano, <span>conqueror of worlds </span></SubTitle>
              <SubTitle2>The most anticipated movie of the year is here</SubTitle2>
              <SlideLink to="/">ver trailer
                <BorderBox1>
                  <span></span>
                  <span></span>
                </BorderBox1>
                <BorderBox2>
                  <span></span>
                  <span></span>
                </BorderBox2>
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