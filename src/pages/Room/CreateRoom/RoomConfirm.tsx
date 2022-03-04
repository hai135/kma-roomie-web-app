import React from 'react'
import './CreateRoom.less'

import { Typography, Input, Form, TimePicker, InputNumber } from 'antd'

const { Title } = Typography
const { TextArea } = Input

const RoomConfirm: React.FC = () => {
  const format = 'HH:mm'
  return (
    <div>
      <Title style={{ textAlign: 'center' }}>Xác nhận</Title>
      <Title level={4}>Số điện thoại</Title>
      <Form.Item name='phone'>
        <Input size='large' placeholder='Nhập số điện thoại của bạn' />
      </Form.Item>

      <Title level={4}>Tiêu đề bài đăng</Title>
      <Form.Item name='name'>
        <TextArea size='large' showCount placeholder='Nhập tiêu đề bài đăng' autoSize={{ minRows: 2, maxRows: 6 }} />
      </Form.Item>

      <Title level={4}>Nội dung mô tả</Title>
      <Form.Item name='description'>
        <TextArea size='large' showCount placeholder='Nhập nội dung mô tả' autoSize={{ minRows: 2, maxRows: 6 }} />
      </Form.Item>

      <Title level={4}>Thời gian mở cửa</Title>
      <Form.Item name='openTime'>
        <TimePicker size='large' style={{ width: '100%' }} format={format} />
      </Form.Item>

      <Title level={4}>Thời gian đóng cửa</Title>
      <Form.Item name='closeTime'>
        <TimePicker size='large' style={{ width: '100%' }} format={format} />
      </Form.Item>
    </div>
  )
}

export default RoomConfirm
