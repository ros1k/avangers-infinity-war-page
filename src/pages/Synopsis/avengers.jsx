import React from 'react'
import { GauntletDetails, GauntletSynopsis, GauntletTitle, GauntletDescription, 
GauntletButton, GauntletHistory, GauntletSecondButton ,StyledModal } from './styled'
import image from '../../assets/images/248142.jpg'

const Avengers = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const refModal = React.useRef();
 
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
            <strong>Avengers</strong> Synopsis
            </GauntletTitle>
            <GauntletDescription>
                Infinity War orange sponser designer caracas, consectetur adipiscing elit. 
                sed do eiusmod tempor incididunt ut labore et dolore.
            </GauntletDescription>
            <GauntletButton onClick={openModal} >
                ver mas
            </GauntletButton>
        </GauntletSynopsis>
        <GauntletHistory>
            <GauntletTitle>
            <strong>Avengers</strong> History
            </GauntletTitle>
            <GauntletDescription>
                Infinity War orange sponser designer caracas, consectetur adipiscing elit. 
                sed do eiusmod tempor incididunt ut labore et dolore.
            </GauntletDescription>
            <GauntletSecondButton onClick={openModal} >
                ver mas
            </GauntletSecondButton>
        </GauntletHistory>
        <StyledModal
            ref={refModal}
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            ariaHideApp={false}
            contentLabel="Example Modal"
            overlayClassName='modalOverlay'
            >
             <GauntletTitle>
                <strong>Avengers</strong> Synopsis
            </GauntletTitle>
            <GauntletDescription>
                Infinity War orange sponser designer caracas, consectetur adipiscing elit. 
                sed do eiusmod tempor incididunt ut labore et dolore.
            </GauntletDescription>
              <button onClick={closeModal}>close</button>
              
            </StyledModal>
        </GauntletDetails>
       
    </>
  )
}

export default Avengers