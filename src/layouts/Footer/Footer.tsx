import React from 'react'
import './Footer.less'

import logo from '../../assets/images/Logo.png'

import { Layout, Row, Typography } from 'antd'

const { Text } = Typography

const Footer: React.FC = () => {
  return (
    <Layout.Footer className='footer'>
      <Row className='container logo'>
        <img src={logo} style={{ width: '250px' }} />
      </Row>
      <div className='dash container'></div>
      <Row className='container text' justify='space-between'>
        <Text>Điều khoản và chính sách</Text>
        <Text>Copyright © 3THD - 2022 All Rights Reserved</Text>
      </Row>
    </Layout.Footer>
  )
}

export default Footer
