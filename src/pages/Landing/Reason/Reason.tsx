import React from 'react'
import './Reason.less'

import { Row, Col, Typography } from 'antd'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation, faStar, faLightbulb, faShareAlt, faCamera, faMap } from '@fortawesome/free-solid-svg-icons'

const { Text } = Typography

const ReasonChild: React.FC<any> = (props) => {
  return (
    <Col>
      <div>
        <FontAwesomeIcon icon={props.icon} className='icon' />
        <Text className='title'>{props.title}</Text>
      </div>
      <br />
      <Text>{props.description}</Text>
    </Col>
  )
}

const Reason: React.FC = () => {
  const data = [
    {
      icon: faSearchLocation,
      title: 'Công cụ tìm kiếm thông minh',
      description: 'Tìm kiếm nhanh chóng chỉ với vài thao tác nhanh chóng',
    },
    {
      icon: faStar,
      title: 'Cộng đồng đánh giá cao',
      description: 'Tìm kiếm nhanh chóng chỉ với vài thao tác nhanh chóng',
    },
    {
      icon: faLightbulb,
      title: 'Tạo phòng nhanh chóng',
      description: 'Tìm kiếm nhanh chóng chỉ với vài thao tác nhanh chóng',
    },
    {
      icon: faShareAlt,
      title: 'Chia sẻ phòng thuận tiện',
      description: 'Tìm kiếm nhanh chóng chỉ với vài thao tác nhanh chóng',
    },
    {
      icon: faCamera,
      title: 'Hình ảnh chân thực',
      description: 'Tìm kiếm nhanh chóng chỉ với vài thao tác nhanh chóng',
    },
    {
      icon: faMap,
      title: 'Có mặt tại các thành phố lớn',
      description: 'Tìm kiếm nhanh chóng chỉ với vài thao tác nhanh chóng',
    },
  ]
  return (
    <div className='reason-wrapper'>
      <div className='reason-title'>Tại sao lại chọn YouRoom</div>
      <div className='container'>
        <Row justify='space-between' wrap gutter={[0, 100]}>
          {data.map((element, index) => {
            return <ReasonChild key={index} {...element} />
          })}
        </Row>
      </div>
    </div>
  )
}

export default Reason
