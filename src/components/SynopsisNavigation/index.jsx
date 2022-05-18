import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SynopsisNavigationWrapper, CustomPaginationElement, CustomPaginationElementLink , 
    SlideButtonLeft ,SlideButtonRight} from './styled';

    import { faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './customSlider.css'

const SynopsisNavigation = () => {
    const SynopsisSettings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 6,
        arrows:true,
        slidesToScroll: 1,
        swipeToScroll:false,
        swipe:false,
        currentSlide: 0,
        prevArrow:<SlideButtonLeft ><FontAwesomeIcon icon={faAngleLeft} /></SlideButtonLeft>,
        nextArrow:<SlideButtonRight ><FontAwesomeIcon icon={faAngleRight} /></SlideButtonRight>,
      }
  
      return (
      <>

        <SynopsisNavigationWrapper {...SynopsisSettings}>
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
        </SynopsisNavigationWrapper>
      </>

  )
}

export default SynopsisNavigation