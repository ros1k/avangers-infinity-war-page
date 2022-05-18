import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from '../../Layout'
import SynopsisNavigation from '../../components/SynopsisNavigation'
import { GauntletDetails, GauntletSynopsis, GauntletTitle, GauntletDescription, 
GauntletLink, GauntletHistory, GauntletSecondLink } from './styled'
          
const Synopsis = () => {
  const [themeColor, setThemeColor] = React.useState('#fff')
 
  return (
    <>
        <Layout>
          <Outlet context={{themeColor}}/>
            <GauntletDetails>
              <GauntletSynopsis>
                  <GauntletTitle>
                    <strong>Soul</strong> Gem Synopsis
                    </GauntletTitle>
                  <GauntletDescription>
                      Infinity War orange sponser designer caracas, consectetur adipiscing elit. 
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </GauntletDescription>
                    <GauntletLink to="/">
                      ver mas
                    </GauntletLink>
              </GauntletSynopsis>
              <GauntletHistory>
                  <GauntletTitle>
                    <strong>Soul</strong> Gem Synopsis
                    </GauntletTitle>
                  <GauntletDescription>
                      Infinity War orange sponser designer caracas, consectetur adipiscing elit. 
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </GauntletDescription>
                    <GauntletSecondLink to="/">
                      ver mas
                    </GauntletSecondLink>
              </GauntletHistory>
          </GauntletDetails>
          <SynopsisNavigation/>
        </Layout>
    </>
  )
}

export default Synopsis