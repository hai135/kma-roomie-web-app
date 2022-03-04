import React, { useState } from 'react'
import './CreateRoom.less'

import { Typography, Input, Select, Form } from 'antd'

const { Title } = Typography
const { Option } = Select

import { data } from '../../../assets/vietnam'

const RoomAddress: React.FC = () => {
  const [city, setCity] = useState('')
  const [districts, setDistricts] = useState<any[]>([])
  const [wards, setWards] = useState<any[]>([])

  const handleCityChange = (value: string) => {
    const citySel = value
    const districtSel = data.find((x) => x.name == citySel)?.districts
    setCity(value)
    if (typeof districtSel !== 'undefined' && districtSel?.length > 0) {
      setDistricts(districtSel)
    }
  }

  const handleDistrictChange = (value: string) => {
    const districtSel = value
    const wardSel = districts.find((x) => x.name == districtSel)?.wards
    setWards(wardSel)
  }

  const cityList = data.map((key) => ({
    name: key.name,
  }))

  return (
    <div>
      <Title style={{ textAlign: 'center' }}>Địa chỉ</Title>
      <Title level={4}>Thành phố</Title>
      <Form.Item name='city'>
        <Select
          showSearch
          size='large'
          style={{ width: '100%' }}
          placeholder='Bấm để chọn Thành phố'
          onChange={handleCityChange}
        >
          {cityList.map((city, index) => {
            return (
              <Option key={index} value={city.name}>
                {city.name}
              </Option>
            )
          })}
        </Select>
      </Form.Item>

      <Title level={4}>Quận / Huyện</Title>
      <Form.Item name='district'>
        <Select
          showSearch
          size='large'
          style={{ width: '100%' }}
          placeholder='Bấm để chọn Quận / Huyện'
          onChange={handleDistrictChange}
        >
          {districts.map((district, index) => {
            return (
              <Option key={index} value={district.name}>
                {district.name}
              </Option>
            )
          })}
        </Select>
      </Form.Item>

      <Title level={4}>Phường / Xã</Title>
      <Form.Item name='ward'>
        <Select showSearch size='large' style={{ width: '100%' }} placeholder='Bấm để chọn Phường / Xã'>
          {wards.map((ward, index) => {
            return (
              <Option key={index} value={ward.name}>
                {ward.name}
              </Option>
            )
          })}
        </Select>
      </Form.Item>

      <Title level={4}>Tên đường</Title>
      <Form.Item name='streetName'>
        <Input size='large' placeholder='Ví dụ: Huỳnh Văn Bánh' />
      </Form.Item>

      <Title level={4}>Số nhà</Title>
      <Form.Item name='houseNumber'>
        <Input size='large' placeholder='Ví dụ: 244/31 ' />
      </Form.Item>
    </div>
  )
}

export default RoomAddress
