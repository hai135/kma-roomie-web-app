import React from 'react'
import './Banner.less'
import { Row } from 'antd'
import { CaretDownOutlined } from '@ant-design/icons'

const Banner: React.FC = () => {
  return (
    <Row className='banner'>
      <Row className='container banner-content'>
        <div className='banner-slogan'>
          Ứng dụng tìm kiếm phòng trọ miễn phí cho người đi thuê hàng đầu Việt Nam
          <div style={{ position: 'absolute', bottom: '0', left: '100vh' }}>
            <CaretDownOutlined style={{ color: '#3b82f6' }} />
          </div>
        </div>
      </Row>
    </Row>
  )
}

export default Banner
