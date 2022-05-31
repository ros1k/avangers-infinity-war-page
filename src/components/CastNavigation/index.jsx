import React from 'react'
import { Outlet } from 'react-router-dom'
import CastNavItem from './CastNavItem'
import styled from 'styled-components'
import {castAvengers} from '../../helpers/db/cast'


const CastNavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;

  list-style: none;
`

const CastNavigation = () => {



  return (
   <>
    <CastNavList>
    {
      castAvengers.Avengers.map((cast,id) => {
        return (
          <CastNavItem
            key={id}
            colorThemeType={cast.colorThemeType}
            colorTheme={cast.colorTheme}
            colorGradient={cast.colorGradient}
            name={cast.name}
            image={cast.image}
          />
        )
      })
    }
    </CastNavList>
   </>
  )
}

export default CastNavigation