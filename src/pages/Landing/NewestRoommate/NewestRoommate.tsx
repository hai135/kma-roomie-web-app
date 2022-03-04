import React, { useRef } from 'react'
import './NewestRoommate.less'

import { Carousel, Card, Typography } from 'antd'
import { CarouselRef } from 'antd/lib/carousel'
import { ArrowRightOutlined, ArrowLeftOutlined, LineOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

const NewestRoommate: React.FC = () => {
  const slider = useRef<CarouselRef>()

  const handleNext = () => {
    slider.current && slider.current.next()
  }

  const handlePrev = () => {
    slider.current && slider.current.prev()
  }

  const data = [
    {
      title: 'Shared Apartment',
      content:
        'Tent flying on a shoestring booking wellness currency euro housing guide hospitality uncharted package sailing kayak model.',
    },
    {
      title: 'Shared Apartment',
      content:
        'Tent flying on a shoestring booking wellness currency euro housing guide hospitality uncharted package sailing kayak model.',
    },
    {
      title: 'Shared Apartment',
      content:
        'Tent flying on a shoestring booking wellness currency euro housing guide hospitality uncharted package sailing kayak model.',
    },
  ]

  return (
    <div className='newest-roommate-wrapper container'>
      <div className='newest-roommate-title'>Tìm bạn ở ghép</div>
      <div className='newest-roommate-content'>
        <Carousel ref={(ref: CarouselRef) => (slider.current = ref)} autoplay autoplaySpeed={5000}>
          <div>
            <div className='services-offered-content'>
              {data.map((key, index) => {
                return (
                  <div key={index}>
                    <Card className='services-offered-content-card' hoverable>
                      <Title level={5} className='services-offered-content-card-title'>
                        0{index + 1} <LineOutlined />
                      </Title>
                      <Title level={3} className='services-offered-content-card-title'>
                        {key.title}
                      </Title>
                      <Text className='services-offered-content-card-text'>{key.content}</Text>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
          <div>
            <div className='services-offered-content'>
              {data.map((key, index) => {
                return (
                  <div key={index}>
                    <Card className='services-offered-content-card' hoverable>
                      <Title level={5} className='services-offered-content-card-title'>
                        0{index + 1} <LineOutlined />
                      </Title>
                      <Title level={3} className='services-offered-content-card-title'>
                        {key.title}
                      </Title>
                      <Text className='services-offered-content-card-text'>{key.content}</Text>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </Carousel>
        <div style={{ textAlign: 'center', marginTop: '48px', fontSize: '20px' }}>
          <ArrowLeftOutlined onClick={handlePrev} />
          &nbsp;&nbsp;&nbsp;
          <ArrowRightOutlined onClick={handleNext} />
        </div>
      </div>
    </div>
  )
}

export default NewestRoommate
