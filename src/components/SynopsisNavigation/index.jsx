import React,{useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SynopsisNavigationWrapper, CustomPaginationElement, CustomPaginationElementLink , 
    SlideButtonLeft ,SlideButtonRight} from './styled';

import { faAngleLeft,faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './customSlider.css'
import { useLocation } from 'react-router-dom';

const SynopsisNavigation = () => { 
    const currentLocation = useLocation();

    const [currnetSlide, setCurrentSlide] = React.useState(0);
    const sliderRef = useRef(null);
    const SynopsisSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        arrows:true,
        slidesToScroll: 1,
        swipeToScroll:false,
        swipe:false,
        currentSlide: currnetSlide,
        className: "nav-slider",
        prevArrow:<SlideButtonLeft ><FontAwesomeIcon icon={faAngleLeft} /></SlideButtonLeft>,
        nextArrow:<SlideButtonRight ><FontAwesomeIcon icon={faAngleRight} /></SlideButtonRight>,
      }
      const onClick = (e) =>{
        sliderRef.current  = e.target;
        const setNavSlide = sliderRef.current.parentNode.parentNode.parentNode.attributes['data-index'].value;
        setCurrentSlide(setNavSlide); 
        console.log(currnetSlide);
      }
      return (
      <>

        <SynopsisNavigationWrapper {...SynopsisSettings}>
            <CustomPaginationElement>
                <CustomPaginationElementLink 
                to={`/synopsis`}
                onClick={onClick}
               
                >
                    general
                </CustomPaginationElementLink>
            </CustomPaginationElement>
            <CustomPaginationElement>
                <CustomPaginationElementLink 
                to={`/synopsis/gauntlet`}
                onClick={onClick}
                
                >
                    gauntlet
                </CustomPaginationElementLink>
            </CustomPaginationElement>
            <CustomPaginationElement>
                <CustomPaginationElementLink 
                to={`/synopsis/soul`}
                 onClick={onClick}
                
                 >
                    soul gem
                </CustomPaginationElementLink>
            </CustomPaginationElement>
            <CustomPaginationElement>
            <CustomPaginationElementLink 
            to={`/synopsis/reality`}
             onClick={onClick}
             
             >
                reality gem
            </CustomPaginationElementLink>
            </CustomPaginationElement>
            <CustomPaginationElement>
                <CustomPaginationElementLink 
                to={`/synopsis/space`}
                onClick={onClick}
                
                >
                    space gem
                </CustomPaginationElementLink>
            </CustomPaginationElement>
            <CustomPaginationElement>
                <CustomPaginationElementLink 
                to={`/synopsis/power`}
                onClick={onClick}
                
                >
                    power gem
                </CustomPaginationElementLink>
            </CustomPaginationElement>
            <CustomPaginationElement>
                <CustomPaginationElementLink 
                to={`/synopsis/time`}
                onClick={onClick}
               
                >
                    time gem
                </CustomPaginationElementLink>
            </CustomPaginationElement>
            <CustomPaginationElement>
                <CustomPaginationElementLink 
                to={`/synopsis/mind`}  
                onClick={onClick}
               
                >
                    mind gem
                </CustomPaginationElementLink>
            </CustomPaginationElement>
        </SynopsisNavigationWrapper>
      </>

  )
}

export default SynopsisNavigation