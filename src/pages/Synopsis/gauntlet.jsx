import React from 'react'
import { GauntletDetails, GauntletSynopsis, GauntletTitle, GauntletDescription, 
    GauntletLink, GauntletHistory, GauntletSecondLink } from './styled'
import image from '../../assets/images/gauntlet.jpg'
import SynopsisNavigation from '../../components/SynopsisNavigation'


const Gauntlet = () => {
  return (
    <> 
    <GauntletDetails bgImage={image}>
        <GauntletSynopsis>
            <GauntletTitle>
            <strong>Power</strong> Gauntlet
            </GauntletTitle>
            <GauntletDescription>
                Thaons onsectetur adipisicing elit. sed do eiusmod tempor cididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitatiion ullamconyst laboris nisiut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
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
   
</>
  )
}

export default Gauntlet