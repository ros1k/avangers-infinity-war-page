import React from 'react'
import styled from 'styled-components';
import CastNavItem from './CastNavItem';
import { useContext } from 'react';
import { CastContext } from '../../../context/castContext';

export const List = styled.ul`
    list-style: none;
    padding: 0; 
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
`
const CastNavList = () => {
    const {subPages} = useContext(CastContext);

    
    const getCastList = () =>{
        return subPages.map((item,index) =>{
            return <CastNavItem key={index} index={index} name={item}/>
        });
    }
  return (
    <>
      <List>
        { getCastList() }
       </List>
    </>
  )
}

export default CastNavList