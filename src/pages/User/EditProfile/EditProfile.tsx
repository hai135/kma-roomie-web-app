import React, { useState, useEffect } from 'react'
import './EditProfile.less'

import { useHistory } from 'react-router-dom'

import { updateProfile, getProfile } from '../../../apis/UserApi'
import { sendNotification } from '../../../utils/Notification'

import UserLayout from '../../../layouts/UserLayout'
import { Card, Typography, Form, Input, Select, Button, Radio } from 'antd'

const { Title } = Typography
const { Option } = Select

import { data } from '../../../assets/vietnam'

const EditProfile: React.FC = () => {
  const [city, setCity] = useState('')
  const [districts, setDistricts] = useState<any[]>([])
  const [wards, setWards] = useState<any[]>([])
  const [userProfile, setUserProfile] = useState<any>()
  const [form] = Form.useForm()
  const history = useHistory()

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

  const getUserProfile = async () => {
    try {
      const response = await getProfile()
      console.log(response)
      if (response.status === 200) {
        setUserProfile(response.data)
      }
    } catch (error) {}
  }

  useEffect(() => {
    getUserProfile()
  }, [])

  const onFinish = async (values: any) => {
    const body = {
      firstName: values.firstName,
      lastName: values.lastName,
      phone: values.phone,
      city: values.city,
      district: values.district,
      ward: values.ward,
      houseNumber: values.houseNumber,
      gender: values.gender,
    }
    try {
      const response = await updateProfile(body)
      if (response.status === 200) {
        sendNotification('success', 'Cập nhật thông tin thành công', '')
      }
    } catch (error) {}
  }

  const onReset = () => {
    form.resetFields()
  }

  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  }

  return (
    <UserLayout>
      <div className='edit-profile-wrapper container'>
        <Card style={{ marginTop: '150px' }}>
          <Form form={form} onFinish={onFinish}>
            <Title level={2} style={{ textAlign: 'center' }}>
              Chỉnh sửa thông tin cá nhân
            </Title>

            <Title level={5}>Họ</Title>
            <Form.Item name='lastName'>
              <Input size='large' />
            </Form.Item>

            <Title level={5}>Tên</Title>
            <Form.Item name='firstName'>
              <Input size='large' />
            </Form.Item>

            <Title level={5}>Giới tính</Title>
            <Form.Item name='gender'>
              <Radio.Group>
                <Radio style={radioStyle} value={2}>
                  Nam
                </Radio>
                <Radio style={radioStyle} value={3}>
                  Nữ
                </Radio>
              </Radio.Group>
            </Form.Item>

            <Title level={5}>Số điện thoại</Title>
            <Form.Item name='phone'>
              <Input size='large' />
            </Form.Item>

            <Title level={5}>Thành phố</Title>
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

            <Title level={5}>Quận / Huyện</Title>
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

            <Title level={5}>Phường / Xã</Title>
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

            <Title level={5}>Tên đường</Title>
            <Form.Item name='streetName'>
              <Input size='large' placeholder='Ví dụ: Huỳnh Văn Bánh' />
            </Form.Item>

            <Title level={5}>Số nhà</Title>
            <Form.Item name='houseNumber'>
              <Input size='large' placeholder='Ví dụ: 25/31 ' />
            </Form.Item>

            <Form.Item style={{ textAlign: 'right' }}>
              <Button htmlType='button' onClick={onReset} style={{ marginRight: '10px' }}>
                Nhập lại
              </Button>
              <Button type='primary' htmlType='submit'>
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </UserLayout>
  )
}

export default EditProfile
