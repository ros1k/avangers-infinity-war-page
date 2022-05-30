import React from 'react'
import { GauntletDetails, GauntletSynopsis, GauntletTitle, GauntletDescription, 
    GauntletButton, GauntletHistory, GauntletSecondButton, StyledModal } from './styled'
import image from '../../assets/images/gauntlet.jpg'



const Gauntlet = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
       
    }

    function closeModal() {
        setIsOpen(false);
    }
    
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
            <GauntletButton onClick={openModal} >
                ver mas
            </GauntletButton>
        </GauntletSynopsis>
        <GauntletHistory>
            <GauntletTitle>
            <strong>Soul</strong> Gem Synopsis
            </GauntletTitle>
            <GauntletDescription>
                Infinity War orange sponser designer caracas, consectetur adipiscing elit. 
                sed do eiusmod tempor incididunt ut labore et dolore.
            </GauntletDescription>
            <GauntletSecondButton onClick={openModal}>
                ver mas
            </GauntletSecondButton>
        </GauntletHistory>
        <StyledModal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              ariaHideApp={false}
              contentLabel="Example Modal"
            >
            
              <button onClick={closeModal}>close</button>
              <div>I am a modal</div>
              <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
              </form>
            </StyledModal>
    </GauntletDetails>
   
</>
  )
}

export default Gauntlet