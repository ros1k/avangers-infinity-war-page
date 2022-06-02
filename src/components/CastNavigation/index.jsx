import React from 'react'
import { Outlet } from 'react-router-dom'
import CastNavItem from './CastNavItem'
import styled from 'styled-components'
import {castAvengers} from '../../helpers/db/cast'
import image from '../../assets/images/wallpaperflare.com_wallpaper1.jpg'

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
            className={id == 0 ? 'current' : ''}
            key={id}
            colorThemeType={cast.colorThemeType}
            colorTheme={cast.colorTheme}
            colorGradient={cast.colorGradient}
            name={cast.name}
            image={image}
          />
        )
      })
    }
    </CastNavList>
   </>
  )
}

export default CastNavigation