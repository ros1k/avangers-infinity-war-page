import React from 'react'
import Description from './description'
import { Wrapper } from './styled'

const index = () => {

  return (
    <>
        <Wrapper>
            <Description title={`<strong>Soul</strong> Gem Synopsis` } />
            <Description title={`<strong>Stone</strong> History`} alignSelf="flex-end"/>
        </Wrapper>
    </>
  )
}

export default index