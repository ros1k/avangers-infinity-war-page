import styled from 'styled-components';


export const TopHeader = styled.header`
  position: relative;
  display:flex;
  justify-content: space-between ;
  border: 1px solid #99999930;
  backdrop-filter: blur(18px);
  z-index: 888;
`
export const LogoWrapper = styled.div`
    min-height: 80px ;
    min-width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

  img{
      width: 40px;
      height: 45px;;
  }
  
`

export const Hamburger = styled.div`
  min-height: 80px ;
  min-width: 80px;
`