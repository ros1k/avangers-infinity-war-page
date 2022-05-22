import React from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'
import { GemStoneWrapper, GemStoneImageWrapper, GemStoneImage,
  GemStoneDetails, GemStoneSynopsis, GemStoneTitle, GemStoneDescription, GemStoneLink,
  SynopsisChild, GemStoneHistory, GemStoneSecondLink

} from './styled'
import image from '../../assets/images/916213.jpg'
import image2 from '../../assets/images/916247.jpg'
import SynopsisNavigation from '../../components/SynopsisNavigation'
import SynopsisDetails from '../../components/SynopsisDetails'
const Gems = () => {
  const {themeColor} = useOutletContext();

  return (
    <>
      <SynopsisChild themeColor={themeColor}>
          <GemStoneWrapper backgroundimage={image}>
            <SynopsisDetails/>
          </GemStoneWrapper>
          
      </SynopsisChild>
      <SynopsisNavigation/>
      <Outlet/>
  
    
    
    </>
  )
}

export default Gems