import React, { useState, useEffect } from 'react'
import './Header.less'

import { Link, useHistory } from 'react-router-dom'

import { PATH } from '../../constants/path'

import { signOut } from '../../apis/AuthApi'

import { getProfile } from '../../apis/UserApi'

import { Typography, Row, Col, Input, Cascader, Button, Form } from 'antd'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserCircle,
  faPlusCircle,
  faSignOutAlt,
  faSearch,
  faSignInAlt,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons'

const { Text } = Typography

import { sendNotification } from '../../utils/Notification'

import logo from '../../assets/images/Logo.png'
import { data } from '../../assets/vietnam'

const HeaderMenu: React.FC = () => {
  const [userInfo, setUserInfo] = useState<any>()

  const handleSignOut = async () => {
    try {
      const response = await signOut()
      if (response.status === 200) {
        localStorage.clear()
        window.location.reload()
      } else {
        sendNotification('error', 'Đăng xuất thât bại', '')
      }
    } catch (error) {
      if (error) {
        sendNotification('error', 'Đăng xuất thât bại', '')
      }
    }
  }

  const getUserInfo = async () => {
    try {
      if (localStorage.getItem('accessToken')) {
        const response = await getProfile()
        console.log(response)
        setUserInfo(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  if (userInfo) {
    return (
      <Col>
        <Text>
          <Link to={PATH.USER.PROFILE} style={{ marginRight: '40px', color: '#fff' }}>
            <FontAwesomeIcon icon={faUserCircle} />
            {userInfo.lastName} {userInfo.firstName}
          </Link>
        </Text>
        <Text>
          <Link to={PATH.ROOM.CREATE_ROOM} style={{ marginRight: '40px', color: '#fff' }}>
            <FontAwesomeIcon icon={faPlusCircle} />
            Đăng phòng
          </Link>
        </Text>
        <Text>
          <Link to='#' style={{ color: '#fff' }} onClick={handleSignOut}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            Đăng xuất
          </Link>
        </Text>
      </Col>
    )
  } else {
    return (
      <Col>
        <Text>
          <Link to={PATH.AUTHENTICATION.LOGIN} style={{ marginRight: '40px', color: '#fff' }}>
            <FontAwesomeIcon icon={faSignInAlt} />
            Đăng nhập
          </Link>
        </Text>
        <Text>
          <Link to={PATH.AUTHENTICATION.REGISTER} style={{ color: '#fff' }}>
            <FontAwesomeIcon icon={faUserPlus} />
            Đăng ký
          </Link>
        </Text>
      </Col>
    )
  }
}

const Header: React.FC = () => {
  const history = useHistory()
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log(values)
    history.push(PATH.ROOM.LIST_ROOM)
  }

  const options: any = []

  data.forEach((city) => {
    const cityE: any = {
      value: city.name,
      label: city.name,
      children: [],
    }

    city.districts.forEach((district) => {
      const districtE: any = {
        value: district.name,
        label: district.name,
        children: [],
      }
      districtE.value = district.name
      districtE.label = district.name
      cityE.children.push(districtE)

      district.wards.forEach((ward) => {
        const wardE: any = {
          value: ward.name,
          label: ward.name,
        }
        wardE.value = ward.name
        wardE.label = ward.name
        districtE.children.push(wardE)
      })
    })

    options.push(cityE)
  })

  return (
    <div className='header'>
      <div className='header-content-wrapper'>
        <Row className='header-content container'>
          <Col></Col>
          <HeaderMenu />
        </Row>
      </div>
      <div className='header-search-wrapper'>
        <Row className='header-search container'>
          <Col style={{ marginRight: '70px' }}>
            <Link to='/'>
              <img src={logo} style={{ width: '200px' }} />
            </Link>
          </Col>
          <Col>
            <Form form={form} onFinish={onFinish}>
              <Input.Group compact>
                <Form.Item name='searchData'>
                  <Cascader
                    className='header-search-input'
                    size='large'
                    placeholder='Tìm kiếm theo địa điểm, quận, tên đường...'
                    allowClear
                    changeOnSelect
                    options={options}
                  />
                </Form.Item>
                <Form.Item>
                  <Button type='ghost' size='large' htmlType='submit'>
                    <FontAwesomeIcon icon={faSearch} style={{ color: '#3b82f6' }} />
                    Tìm kiếm
                  </Button>
                </Form.Item>
              </Input.Group>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Header
