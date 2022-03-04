import React from 'react'
import UserLayout from '../../layouts/UserLayout'
import Profile from './Profile/Profile'
import Room from './Room/Room'
import { Space } from 'antd'

const User: React.FC = () => {
  return (
    <UserLayout>
      <div className={'container'} style={{ minHeight: '85vh' }}>
        <Space direction={'vertical'} style={{ width: '100%' }}>
          <Profile />
          <Room />
        </Space>
      </div>
    </UserLayout>
  )
}

export default User
