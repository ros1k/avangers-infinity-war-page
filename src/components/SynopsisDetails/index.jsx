import React  from 'react'
import Description from './description'
import { Wrapper } from './styled'


const SynopsisDetails = () => {

  return (
    <>
        <Wrapper>
            <Description data-aos="fade-right" data-aos-delay="3" title={`<strong>Soul</strong> Gem Synopsis` } />
            <Description data-aos="fade-left" title={`<strong>Stone</strong> History`} alignSelf="flex-end"/>
        
        </Wrapper>
    </>
  )
}

export default SynopsisDetails