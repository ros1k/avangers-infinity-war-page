import React, {useEffect} from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'
import { GemStoneWrapper, SynopsisChild } from './styled'
import image from '../../assets/images/916213.jpg'
import image2 from '../../assets/images/916247.jpg'

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
    </>
  )
}

export default Gems