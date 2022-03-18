import React from 'react'
import './RoomCard.less'
// import image1 from '../../../../assets/images/SB-ATL-ZookHome-9-e1538165814448.jpg'
// import image2 from '../../../../assets/images/1.jpg'
// import image3 from '../../../../assets/images/2.jpg'
// import image4 from '../../../../assets/images/3.jpg'

// const images = [image1, image2, image3, image4]

import { urlRoomNameConvert, currencyConvert } from '../../../../utils/convert'

import { Link } from 'react-router-dom'

import { Button } from 'antd'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const RoomCard: React.FC = (props: any) => {
  return (
    <div className='room-card-wrapper'>
      <img src={props.imageUrl} className='room-card-image' />
      <div className='room-card-content'>
        <div className='room-card-content-address'>{props.roomInformation.name}</div>
        <div className='room-card-content-city'>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          &nbsp;&nbsp; {props.roomAddress.city}
        </div>
        <div className='room-card-content-name'>
          {props.roomInformation.roomType.name}&nbsp;
          {props.roomAddress.houseNumber}&nbsp;
          {props.roomAddress.streetName},&nbsp;
          {props.roomAddress.ward},&nbsp;
          {props.roomAddress.district}
        </div>
        <div className='room-card-content-table'>
          <table cellPadding='5'>
            <tbody>
              <tr>
                <td style={{ width: '50%' }}>Giá phòng</td>
                <td>Tiền cọc</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>
                  {currencyConvert(props.roomExpense.rentalPrice).price}{' '}
                  {currencyConvert(props.roomExpense.rentalPrice).unit} / tháng
                </td>
                <td style={{ fontWeight: 600 }}>
                  {currencyConvert(props.roomExpense.deposit).price} {currencyConvert(props.roomExpense.deposit).unit}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='room-card-content-button'>
          <Button size={'large'}>
            <Link to={`/room/${urlRoomNameConvert(props.roomInformation.name)}/${props.id}`}>Chi tiết</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default RoomCard
