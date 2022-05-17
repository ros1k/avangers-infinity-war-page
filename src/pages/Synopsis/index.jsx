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
  const [themeColor, setThemeColor] = React.useState('#fff')
  const SynopsisSettings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 6,
    arrows:false,
    slidesToScroll: 1,
    currentSlide: 0,
    prevArrow:<SlideButtonLeft ><FontAwesomeIcon icon={faAngleLeft} /></SlideButtonLeft>,
    nextArrow:<SlideButtonRight ><FontAwesomeIcon icon={faAngleRight} /></SlideButtonRight>,
  }
  return (
    <>
        <Layout>
          <Outlet context={{themeColor}}/>
            
            <SynopsisNavigation {...SynopsisSettings}>
            <CustomPaginationElement>
                  <CustomPaginationElementLink to={`/synopsis`}>
                      general
                    </CustomPaginationElementLink>
              </CustomPaginationElement>
              <CustomPaginationElement>
                  <CustomPaginationElementLink to={`/synopsis/gauntlet`}>
                       gauntlet
                    </CustomPaginationElementLink>
              </CustomPaginationElement>
              <CustomPaginationElement>
                  <CustomPaginationElementLink to={`/synopsis/soul`}>
                       soul gem
                    </CustomPaginationElementLink>
              </CustomPaginationElement>
              <CustomPaginationElement>
               <CustomPaginationElementLink to={`/synopsis/reality`}>
                  reality gem
                </CustomPaginationElementLink>
              </CustomPaginationElement>
              <CustomPaginationElement>
                  <CustomPaginationElementLink to={`/synopsis/space`}>
                      space gem
                    </CustomPaginationElementLink>
              </CustomPaginationElement>
              <CustomPaginationElement>
                  <CustomPaginationElementLink to={`/synopsis/power`}>
                      power gem
                    </CustomPaginationElementLink>
              </CustomPaginationElement>
              <CustomPaginationElement>
                  <CustomPaginationElementLink to={`/synopsis/time`}>
                      time gem
                    </CustomPaginationElementLink>
              </CustomPaginationElement>
              <CustomPaginationElement>
                  <CustomPaginationElementLink to={`/synopsis/mind`}>
                      mind gem
                    </CustomPaginationElementLink>
              </CustomPaginationElement>

            </SynopsisNavigation>
            
        </Layout>
    </>
  )
}

export default Synopsis