import React, { useState } from 'react'
import './Register.less'

import { PATH } from '../../../constants/path'

import { signUp } from '../../../apis/AuthApi'

import { useHistory } from 'react-router-dom'

import { Form, Input, Button, Row, Select, Radio } from 'antd'

import UserLayout from '../../../layouts/UserLayout'

import { sendNotification } from '../../../utils/Notification'

import { data } from '../../../assets/vietnam'

const { Option } = Select

const Register: React.FC = () => {
  const [city, setCity] = useState('')
  const [districts, setDistricts] = useState<any[]>([])
  const [wards, setWards] = useState<any[]>([])
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

  const onFinish = async (values: any) => {
    const body = {
      username: values.username,
      email: values.email,
      password: values.password,
      userInfo: {
        firstName: values.firstName,
        lastName: values.lastName,
        city: values.city,
        district: values.district,
        ward: values.ward,
        houseNumber: values.houseNumber,
        phone: values.phone,
        gender: values.gender,
      },
    }
    try {
      const response = await signUp(body)
      console.log(response)
      if (response.status === 200) {
        history.push(PATH.HOME)
        sendNotification('success', 'Đăng ký thành công', '')
      }
    } catch (error) {}
  }

  const layout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 14 },
  }

  const tailLayout = {
    wrapperCol: { offset: 10, span: 24 },
  }

  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  }

  return (
    <UserLayout>
      <div className='register-wrapper container'>
        <Row>
          <Form
            {...layout}
            form={form}
            name='register'
            onFinish={onFinish}
            scrollToFirstError
            className='register-form'
          >
            <Form.Item
              name='lastName'
              label='Họ'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập vào họ!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name='firstName'
              label='Tên'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập vào tên!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name='phone'
              label='Số điện thoại'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập vào số điện thoại!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name='username'
              label='Tên đăng nhập'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập vào username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name='email'
              label='E-mail'
              rules={[
                {
                  type: 'email',
                  message: 'E-mail không hợp lệ!',
                },
                {
                  required: true,
                  message: 'Vui lòng nhập vào E-mail!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name='password'
              label='Mật khẩu'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhâp vào password!',
                },
                {
                  min: 6,
                  message: 'Password tối thiểu 6 ký tự!',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name='confirm'
              label='Xác thực mật khẩu'
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Vui lòng xác nhận password!',
                },
                {
                  min: 6,
                  message: 'Password tối thiểu 6 ký tự!',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject('Password bạn nhập không giống nhau!')
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name='gender'
              label='Giới tính'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng chọn giới tính!',
                },
              ]}
            >
              <Radio.Group>
                <Radio style={radioStyle} value={2}>
                  Nam
                </Radio>
                <Radio style={radioStyle} value={3}>
                  Nữ
                </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name='city'
              label='Thành phố'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng chọn thành phố!',
                },
              ]}
            >
              <Select
                showSearch
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

            <Form.Item
              name='district'
              label='Quận / Huyện'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng chọn quận / huyện!',
                },
              ]}
            >
              <Select
                showSearch
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

            <Form.Item
              name='ward'
              label='Phường / Xã'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng chọn phường / xã!',
                },
              ]}
            >
              <Select showSearch style={{ width: '100%' }} placeholder='Bấm để chọn Phường / Xã'>
                {wards.map((ward, index) => {
                  return (
                    <Option key={index} value={ward.name}>
                      {ward.name}
                    </Option>
                  )
                })}
              </Select>
            </Form.Item>

            <Form.Item
              name='houseNumber'
              label='Số nhà'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng điền sô nhà!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type='primary' htmlType='submit' style={{ width: '100%' }}>
                Đăng ký
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </div>
    </UserLayout>
  )
}

export default Register
