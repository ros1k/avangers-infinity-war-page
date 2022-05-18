import React from 'react'
import { GauntletDetails, GauntletSynopsis, GauntletTitle, GauntletDescription, 
    GauntletLink, GauntletHistory, GauntletSecondLink } from './styled'
const Gauntlet = () => {
  return (
    <> 
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
</>
  )
}

export default Gauntlet