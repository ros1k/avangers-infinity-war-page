import React from 'react'
import { Avengers } from '../../helpers/db/avengers'
import Layout from '../../Layout'
import { CastProvider } from '../../context/castContext'

const Gallery = () => {
  return (
      <>
        <CastProvider> 
            <Layout hide={true} showButtons={false}>
              
             
               
            </Layout>
        </CastProvider> 
    </>
  )
}

export default Gallery