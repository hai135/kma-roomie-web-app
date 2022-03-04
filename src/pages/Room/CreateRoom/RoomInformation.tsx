import React, { useState } from 'react'
import './CreateRoom.less'

import { Typography, Radio, Checkbox, Form } from 'antd'
import InputCurrency from '../../../components/InputCurrency/InputCurrency'

const { Title } = Typography

const RoomInformation: React.FC = () => {
  const [parking, setParking] = useState(false)

  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  }

  return (
    <div>
      <Title style={{ textAlign: 'center' }}>Thông tin phòng</Title>

      <Title level={4}>Loại phòng</Title>
      <Form.Item name='roomType'>
        <Radio.Group>
          <Radio style={radioStyle} value={1}>
            Kí túc xá/ Homestay
          </Radio>
          <Radio style={radioStyle} value={2}>
            Phòng cho thuê
          </Radio>
          <Radio style={radioStyle} value={3}>
            Phòng ở ghép
          </Radio>
          <Radio style={radioStyle} value={4}>
            Nhà nguyên căn
          </Radio>
          <Radio style={radioStyle} value={5}>
            Căn hộ
          </Radio>
        </Radio.Group>
      </Form.Item>

      <Title level={4}>Sức chứa</Title>
      <Form.Item name='capacity'>
        <InputCurrency step={1} placeholder='Nhập số người/căn' />
      </Form.Item>

      <Title level={4}>Giới tính</Title>
      <Form.Item name='gender'>
        <Radio.Group>
          <Radio style={radioStyle} value={1}>
            Tất cả
          </Radio>
          <Radio style={radioStyle} value={2}>
            Nam
          </Radio>
          <Radio style={radioStyle} value={3}>
            Nữ
          </Radio>
        </Radio.Group>
      </Form.Item>

      <Title level={4}>
        Diện tích ( m<sup>2</sup> )
      </Title>
      <Form.Item name='area'>
        <InputCurrency step={0.1} placeholder='Nhập diện tích phòng' />
      </Form.Item>

      <Title style={{ textAlign: 'center' }}>Chi phí</Title>
      <Title level={4}>Giá cho thuê</Title>
      <Form.Item name='rentalPrice'>
        <InputCurrency step={100000} placeholder='Nhập giá cho thuê, đơn vị VND/phòng' />
      </Form.Item>

      <Title level={4}>Đặt cọc</Title>
      <Form.Item name='deposit'>
        <InputCurrency step={100000} placeholder='Nhập sô tháng hoặc số tiền, đơn vị VND/phòng' />
      </Form.Item>

      <Title level={4}>Tiền điện</Title>
      <Form.Item name='electricityCost'>
        <InputCurrency step={100000} placeholder='Nhập số tiền, đơn vị VND/phòng' />
      </Form.Item>

      <Title level={4}>Tiền nước</Title>
      <Form.Item name='waterCost'>
        <InputCurrency step={100000} placeholder='Nhập số tiền, đơn vị VND/phòng' />
      </Form.Item>

      <Title level={4}>Internet/truyền hình cáp</Title>
      <Form.Item name='internetCost'>
        <InputCurrency step={100000} placeholder='Nhập số tiền, đơn vị VND/phòng' />
      </Form.Item>

      <Form.Item>
        <Checkbox onChange={(e) => setParking(e.target.checked)}>Có chỗ để xe</Checkbox>
      </Form.Item>

      <div style={{ display: parking ? 'block' : 'none' }}>
        <Title level={4}>Phí giữ xe</Title>
        <Form.Item name='parkingCost'>
          <InputCurrency step={100000} placeholder='Nhập số tiền, đơn vị VND/phòng' />
        </Form.Item>
      </div>
    </div>
  )
}

export default RoomInformation
