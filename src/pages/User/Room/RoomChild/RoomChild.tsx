import React from 'react'
import './RoomChild.less'
import image from '../../../../assets/images/SB-ATL-ZookHome-9-e1538165814448.jpg'

import { Link } from 'react-router-dom'

import { deleteRoom } from '../../../../apis/RoomApi'

import dayjs from 'dayjs'

import { currencyConvert, urlRoomNameConvert } from '../../../../utils/convert'
import { sendNotification } from '../../../../utils/Notification'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUserFriends,
  faRuler,
  faMapMarkerAlt,
  faHistory,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons'

import { Row, Col, Typography, Button, Popconfirm } from 'antd'

const { Title, Text } = Typography

const RoomChild: React.FC = (props: any) => {
  const { price, unit } = currencyConvert(props.roomExpense.rentalPrice)
  console.log(props)
  let gender
  if (props.roomInformation.gender == 1) {
    gender = 'Nam hoặc Nữ'
  } else if (props.roomInformation.gender == 1) {
    gender = 'Nam'
  } else {
    gender = 'Nữ'
  }

  const onConfirm = async () => {
    try {
      const response = await deleteRoom(props.id)
      if (response.status === 200) {
        window.location.reload()
        sendNotification('success', 'Xóa phòng thành công', '')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='room-child-wrapper'>
      <Row gutter={24}>
        <Col span={6}>
          <img src={props.imageUrl} className='room-child-image' />
        </Col>
        <Col span={11}>
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
            <Text>
              <FontAwesomeIcon icon={faHistory} />
              {dayjs(props.createdAt).format('DD-MM-YYYY')}
            </Text>
            <Text>
              <FontAwesomeIcon icon={faInfoCircle} />
              <span style={{ color: props.admin ? '#1edb4c' : 'red', fontWeight: 700 }}>
                {props.admin ? 'Đã được xác thực' : 'Chưa được xác thực'}
              </span>
            </Text>
          </div>
        </Col>
        <Col span={4}>
          <div className='room-child-price'>
            <Title style={{ marginBottom: '0px' }}>{price}</Title>
            <Text>{unit} / phòng</Text>
          </div>
        </Col>
        <Col span={3} style={{ textAlign: 'center' }}>
          <Button style={{ marginBottom: '10px', width: '120px' }} type='primary'>
            <Link to={`/room/${urlRoomNameConvert(props.roomInformation.name)}/${props.id}`}>Xem phòng</Link>
          </Button>
          <Popconfirm title='Bạn chắc chắn muốn xóa phòng？' okText='Xóa phòng' cancelText='Hủy' onConfirm={onConfirm}>
            <Button style={{ width: '120px' }} danger type='primary'>
              Xóa phòng
            </Button>
          </Popconfirm>
        </Col>
      </Row>
    </div>
  )
}

export default RoomChild
