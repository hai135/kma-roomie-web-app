import React from 'react'
import './RoomChild.less'
import image from '../../../../assets/images/SB-ATL-ZookHome-9-e1538165814448.jpg'

import { currencyConvert } from '../../../../utils/convert'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserFriends, faRuler, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import { Row, Col, Typography } from 'antd'

const { Title, Text } = Typography

const RoomChild: React.FC = (props: any) => {
  const { price, unit } = currencyConvert(props.roomExpense.rentalPrice)
  let gender
  if (props.roomInformation.gender == 1) {
    gender = 'Nam hoặc Nữ'
  } else if (props.roomInformation.gender == 1) {
    gender = 'Nam'
  } else {
    gender = 'Nữ'
  }
  return (
    <div className='room-child-wrapper'>
      <Row gutter={24}>
        <Col span={6}>
          <img src={props.imageUrl} className='room-child-image' />
        </Col>
        <Col span={14}>
          <div className='room-child-information'>
            <Title level={5}>{props.roomInformation.name}</Title>
            <Text>
              <FontAwesomeIcon icon={faHome} />
              {props.roomInformation.roomType.name}
            </Text>
            <Text>
              <FontAwesomeIcon icon={faUserFriends} />
              {gender} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon icon={faRuler} />
              {props.roomInformation.roomArea} m<sup>2</sup>
            </Text>
            <Text>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              {props.roomAddress.houseNumber}&nbsp;
              {props.roomAddress.streetName},&nbsp;{props.roomAddress.ward},&nbsp;{props.roomAddress.district},&nbsp;
              {props.roomAddress.city}
            </Text>
          </div>
        </Col>
        <Col span={4}>
          <div className='room-child-price'>
            <Title style={{ marginBottom: '0px' }}>{price}</Title>
            <Text>{unit} / phòng</Text>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default RoomChild
