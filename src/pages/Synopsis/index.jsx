import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from '../../Layout'
import SynopsisNavigation from '../../components/SynopsisNavigation'




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