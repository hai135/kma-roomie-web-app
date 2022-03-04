import React, { useEffect, useState } from 'react'
import './Room.less'

import { getUserRoom } from '../../../apis/RoomApi'

import RoomChild from './RoomChild/RoomChild'

import { Link } from 'react-router-dom'
import { PATH } from '../../../constants/path'

import { Card, Empty, Button } from 'antd'

const Room: React.FC = () => {
  const [roomList, setRoomList] = useState<any[]>([])

  const getRoomList = async () => {
    try {
      const params = {
        userName: localStorage.getItem('userName'),
      }
      const response = await getUserRoom(params)
      if (response.status === 200) {
        setRoomList(response.data.content)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRoomList()
  }, [])

  return (
    <Card title='Danh sách phòng đã đăng'>
      {roomList.length > 0 ? (
        roomList.map((element, index) => {
          return <RoomChild key={index} {...element} />
        })
      ) : (
        <Empty description={<span>Bạn chưa có phòng đăng cá nhân nào, thử đăng phòng ngay.</span>}>
          <Button type='primary'>
            <Link to={PATH.ROOM.CREATE_ROOM}>Đăng phòng</Link>
          </Button>
        </Empty>
      )}
    </Card>
  )
}

export default Room
