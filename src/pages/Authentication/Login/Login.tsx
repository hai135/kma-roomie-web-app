import React from 'react'
import './Login.less'

import { signIn } from '../../../apis/AuthApi'

import { PATH } from '../../../constants/path'

import { Link, useHistory } from 'react-router-dom'

import { Form, Input, Button, Row } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import UserLayout from '../../../layouts/UserLayout'

import { sendNotification } from '../../../utils/Notification'

const Login: React.FC = () => {
  const history = useHistory()

  const onFinish = async (values: any) => {
    const body = {
      usernameOrEmail: values.usernameOrEmail,
      password: values.password,
    }
    try {
      const response = await signIn(body)
      console.log(response)
      if (response.status === 200) {
        // const err = []
        // response.data.role.map((element: any) => {
        //   if (element.name == 'ROLE_ADMIN') {
        //     err.push('err')
        //   }
        // })
        // if (err.length == 0) {
        localStorage.setItem('accessToken', response.data.accessToken)
        localStorage.setItem('userName', values.usernameOrEmail)
        sendNotification('success', 'Đăng nhập thành công', '')
        history.push(PATH.HOME)
        window.location.reload()
        // } else {
        //   sendNotification('error', 'Đăng nhập thất bại', '')
      }
      // } else {
      //   sendNotification('error', 'Đăng nhập thất bại', '')
      // }
    } catch (err) {
      sendNotification('error', 'Đăng nhập thất bại', '')
    }
  }

  return (
    <UserLayout>
      <div className='login-wrapper container'>
        <Row>
          <Form name='basic' initialValues={{ remember: true }} onFinish={onFinish} className='login-form'>
            <Form.Item
              label='Tài khoản'
              name='usernameOrEmail'
              rules={[{ required: true, message: 'Vui lòng nhập vào tên tài khoản!' }]}
            >
              <Input size='large' prefix={<UserOutlined className='site-form-item-icon' />} />
            </Form.Item>

            <Form.Item
              label='Mật khẩu'
              name='password'
              rules={[{ required: true, message: 'Vui lòng nhập vào mật khẩu!' }]}
            >
              <Input.Password size='large' prefix={<LockOutlined className='site-form-item-icon' />} />
            </Form.Item>

            {/* <Form.Item>
              <Form.Item name='remember' valuePropName='checked' noStyle>
                <Checkbox>Nhớ đăng nhập</Checkbox>
              </Form.Item>

              <a className='login-form-forgot' href=''>
                Quên mật khẩu
              </a>
            </Form.Item> */}

            <Form.Item style={{ textAlign: 'right' }}>
              <Button type='primary' htmlType='submit' size='large' className='login-form-button'>
                Đăng nhâp
              </Button>
              <div style={{ fontSize: '16px' }}>
                Hoặc &nbsp;
                <Link to='register' style={{ color: '#3b82f6' }}>
                  Đăng ký ngay tại đây!
                </Link>
              </div>
            </Form.Item>
          </Form>
        </Row>
      </div>
    </UserLayout>
  )
}

export default Login
