import React from 'react'
import { DescriptionWrapper, DescriptionTitle, DescriptionText, DescriptionLink } from './styled'
const Description = ({alignSelf}) => {
  return (
   <>
        <DescriptionWrapper alignSelf={alignSelf} >
            <DescriptionTitle>
            <strong>Soul</strong> Gem Synopsis
            </DescriptionTitle>
            <DescriptionText>
                Infinity War orange sponser designer caracas, consectetur adipiscing elit. 
                sed do eiusmod tempor incididunt ut labore et dolore.
            </DescriptionText>
            <DescriptionLink to="/">
                ver mas
            </DescriptionLink>
        </DescriptionWrapper>
   </>
  )
}

export default Description