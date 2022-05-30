import React from 'react'
import { DescriptionWrapper, 
  DescriptionTitle, 
  DescriptionText, 
  DescriptionButton,
  StyledModal,
  } from './styled'
import Modal from 'react-modal';

const Description = ({alignSelf}) => {
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
        <DescriptionWrapper alignSelf={alignSelf} >
            <DescriptionTitle>
            <strong>Soul</strong> Gem Synopsis
            </DescriptionTitle>
            <DescriptionText>
                Infinity War orange sponser designer caracas, consectetur adipiscing elit. 
                sed do eiusmod tempor incididunt ut labore et dolore.
            </DescriptionText>
            <DescriptionButton onClick={openModal}>
                ver mas
            </DescriptionButton>
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
        </DescriptionWrapper>
   </>
  )
}

export default Description