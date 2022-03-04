import React from 'react'
import { Layout } from 'antd'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const UserLayout: React.FC = (props) => {
  return (
    <Layout>
      <Header />
      <Layout.Content>{props.children}</Layout.Content>
      <Footer />
    </Layout>
  )
}

export default UserLayout
