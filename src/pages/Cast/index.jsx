import React from 'react'
import Layout from 'Layout'
import { Outlet } from 'react-router-dom'
import CastNavigation from '../../components/CastNavigation'

const Cast = () => {
  return (
    <>
    <Layout hide={true}>
      
        <Outlet />
        <CastNavigation/>
    </Layout>
    
</>
  )
}

export default Cast