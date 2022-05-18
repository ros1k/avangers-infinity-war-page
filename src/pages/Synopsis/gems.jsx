import React from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'
import { GemStoneWrapper, GemStoneImageWrapper, GemStoneImage,
  GemStoneDetails, GemStoneSynopsis, GemStoneTitle, GemStoneDescription, GemStoneLink,
  SynopsisChild, GemStoneHistory, GemStoneSecondLink

} from './styled'
import image from '../../assets/images/916213.jpg'
import image2 from '../../assets/images/916247.jpg'
import SynopsisNavigation from '../../components/SynopsisNavigation'

const Gems = () => {
  const {themeColor} = useOutletContext();

  return (
    <>
        <SynopsisChild themeColor={themeColor}>
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
                  <GemStoneHistory>
                      <GemStoneTitle>
                        <strong>Soul</strong> Gem Synopsis
                        </GemStoneTitle>
                      <GemStoneDescription>
                          Infinity War orange sponser designer caracas, consectetur adipiscing elit. 
                          sed do eiusmod tempor incididunt ut labore et dolore.
                        </GemStoneDescription>
                        <GemStoneSecondLink to="/">
                          ver mas
                        </GemStoneSecondLink>
                  </GemStoneHistory>
              </GemStoneDetails>
          </GemStoneWrapper>
          
      </SynopsisChild>
      <SynopsisNavigation/>
      <Outlet/>
  
    
    
    </>
  )
}

export default Gems