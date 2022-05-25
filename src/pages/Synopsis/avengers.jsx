import React from 'react'
import SynopsisNavigation from '../../components/SynopsisNavigation'
import { GauntletDetails, GauntletSynopsis, GauntletTitle, GauntletDescription, 
GauntletLink, GauntletHistory, GauntletSecondLink } from './styled'
import image from '../../assets/images/248142.jpg'

const Avengers = () => {
  return (
    <>
        <GauntletDetails bgImage={image}>
        <GauntletSynopsis>
            <GauntletTitle>
            <strong>Avengers</strong> Synopsis
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
            <strong>Avengers</strong> History
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

export default Avengers