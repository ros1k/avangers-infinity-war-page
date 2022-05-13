import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from '../../Layout'

const Information = () => {
  return (
    <>
    <Layout>
      <div>Information</div>
      <Outlet/>
    </Layout>
    
    
    </>
  )
}

export default Information