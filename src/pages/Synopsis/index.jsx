import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from '../../Layout'
import SynopsisNavigation from '../../components/SynopsisNavigation'
import { GauntletDetails, GauntletSynopsis, GauntletTitle, GauntletDescription, 
GauntletLink, GauntletHistory, GauntletSecondLink } from './styled'
import image from '../../assets/images/248142.jpg'



const Synopsis = () => {
  
  const [themeColor, setThemeColor] = React.useState('#fff')

  return (
    <>
        <Layout>
          
            <Outlet context={{themeColor}}/>
            <SynopsisNavigation/>
        </Layout>
        
    </>
  )
}

export default Synopsis