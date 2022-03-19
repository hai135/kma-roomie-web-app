import React, { useEffect, useState } from 'react'
import './Profile.less'

import dayjs from 'dayjs'

import { Link } from 'react-router-dom'

import { ProfileModel } from '../../../@types/model/Profile'

import { PATH } from '../../../constants/path'

import { getProfile } from '../../../apis/UserApi'
import avatar from '../../../assets/images/Avatar.jpg'

import { Avatar, Button, Card, Col, Row, Typography } from 'antd'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faVenusMars, faCalendarAlt, faMapMarkedAlt, faHouseUser } from '@fortawesome/free-solid-svg-icons'

const { Text, Title } = Typography

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<ProfileModel>()

  const getUserProfile = async () => {
    try {
      const response = await getProfile()
      console.log(response)
      if (response.status === 200) {
        setProfile(response.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUserProfile()
  }, [])

  return (
    <Card style={{ marginTop: '150px' }}>
      <Row gutter={16} style={{ margin: '5px' }}>
        <Col span={3}>
          <Avatar size={128}>{profile?.lastName.charAt(0)}</Avatar>
        </Col>
        <Col span={9} style={{ borderRight: '1px solid #F0F0F0' }}>
          <Title level={3}>
            {profile?.lastName} {profile?.firstName}
          </Title>
          <Button type='ghost' style={{ marginRight: '10px' }}>
            <Link to={PATH.USER.EDIT_PROFILE}>Chỉnh sửa trang cá nhân</Link>
          </Button>
          {/* <Button type='primary'>
            <Link to={PATH.USER.EDIT_PROFILE}>Đổi mật khẩu</Link>
          </Button> */}
        </Col>
        <Col flex='auto' style={{ paddingLeft: '50px' }}>
          <Row gutter={32}>
            <Col>
              <div className={'item'}>
                <FontAwesomeIcon icon={faPhone} />
                <Text>Số điện thoại:</Text>
                &nbsp;
                <Text>{profile?.phone}</Text>
              </div>
              <div className={'item'}>
                <FontAwesomeIcon icon={faVenusMars} />
                <Text>Giới tính:</Text>
                &nbsp;
                <Text>Nam</Text>
              </div>
              <div className={'item'}>
                <FontAwesomeIcon icon={faCalendarAlt} />
                <Text>Ngày tham gia:</Text>
                &nbsp;
                <Text>{dayjs(profile?.createdAt).format('DD-MM-YYYY')}</Text>
              </div>
              <div className={'item'}>
                <FontAwesomeIcon icon={faMapMarkedAlt} />
                <Text>Địa chỉ:</Text>
                &nbsp;
                <Text>
                  {profile?.houseNumber} {profile?.ward}, {profile?.district}, {profile?.city}
                </Text>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default Profile
