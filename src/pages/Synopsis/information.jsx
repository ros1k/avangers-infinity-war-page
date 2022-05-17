import React from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'
import { GemStoneWrapper, GemStoneImageWrapper, GemStoneImage,
  GemStoneDetails, GemStoneSynopsis, GemStoneTitle, GemStoneDescription, GemStoneLink,
  SynopsisChild,

} from './styled'
import image from '../../assets/images/916213.jpg'
import image2 from '../../assets/images/916247.jpg'

const Information = () => {
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
                0        <GemStoneLink to="/">
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
      </SynopsisChild>
      <Outlet/>
  
    
    
    </>
  )
}

export default Information