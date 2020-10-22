import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/HomePage/Layout'
import Head from '../components/HomePage/Head'

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1 style={{ paddingTop: '120px' }}>Page Not found </h1>
      <p>
        <Link to="/">Head Home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
