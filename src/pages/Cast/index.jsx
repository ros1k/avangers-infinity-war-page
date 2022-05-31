import React from 'react'
import Layout from 'Layout'
import { Outlet } from 'react-router-dom'
import CastNavigation from '../../components/CastNavigation'
import {castAvengers} from '../../helpers/db/cast'
import {CastWrapper} from './styled'

const Cast = () => {
  return (
    <>
      <Layout hide={true}>
          <CastWrapper>
            <Outlet />
            <CastNavigation/>
          </CastWrapper>
          
          
      </Layout>
    </>
  )
}

export default Cast