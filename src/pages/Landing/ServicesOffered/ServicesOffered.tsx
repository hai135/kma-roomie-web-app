import React from 'react'
import './ServicesOffered.less'

import { Typography, Card } from 'antd'
import { LineOutlined } from '@ant-design/icons'

const { Text, Title } = Typography

const ServicesOffered: React.FC = () => {
  const data = [
    {
      title: 'Đăng phòng thuận tiện',
      content:
        'Tent flying on a shoestring booking wellness currency euro housing guide hospitality uncharted package sailing kayak model.',
    },
    {
      title: 'Tìm phòng nhanh chóng',
      content:
        'Tent flying on a shoestring booking wellness currency euro housing guide hospitality uncharted package sailing kayak model.',
    },
    // {
    //   title: 'Tìm bạn ở ghép',
    //   content:
    //     'Tent flying on a shoestring booking wellness currency euro housing guide hospitality uncharted package sailing kayak model.',
    // },
  ]

  return (
    <div className='services-offered-wrapper container'>
      <div className='services-offered-title'>Các dịch vụ cung cấp</div>
      <div className='services-offered-content'>
        {data.map((data, index) => {
          return (
            <div key={index}>
              <Card className='services-offered-content-card'>
                <Title level={5} className='services-offered-content-card-title'>
                  0{index + 1} <LineOutlined />
                </Title>
                <Title level={3} className='services-offered-content-card-title'>
                  {data.title}
                </Title>
                <Text className='services-offered-content-card-text'>{data.content}</Text>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ServicesOffered
