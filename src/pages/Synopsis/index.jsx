import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from '../../Layout'

const Synopsis = () => {
  return (
    <>
        <Layout>
            synopsis
            <Outlet/>
        </Layout>
    </>
  )
}

export default Synopsis