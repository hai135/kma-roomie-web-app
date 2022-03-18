import React, { useState, useRef, useEffect } from 'react'
import './NewestRoom.less'

import { getRoom } from '../../../apis/RoomApi'

import { Carousel } from 'antd'
import { CarouselRef } from 'antd/lib/carousel'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons'

import RoomCard from './RoomCard/RoomCard'

const NewestRoom: React.FC = () => {
  const slider = useRef<CarouselRef>()
  const [roomList, setRoomList] = useState<any[]>([])

  const getRoomList = async () => {
    try {
      const params = {
        page: 0,
        size: 3,
      }
      const response = await getRoom(params)
      console.log(response.data.content)
      setRoomList(response.data.content)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getRoomList()
  }, [])

  const handleNext = () => {
    slider.current && slider.current.next()
  }

  const handlePrev = () => {
    slider.current && slider.current.prev()
  }

  return (
    <div className='newest-room-wrapper container'>
      <div className='newest-room-title'>Phòng mới nhất</div>
      <div>
        <Carousel ref={(ref: CarouselRef) => (slider.current = ref)} autoplay autoplaySpeed={5000} dots={false}>
          <div>
            <div className='newest-room-content' style={{ marginTop: '20px', marginBottom: '20px' }}>
              {roomList &&
                roomList.map((element, index) => {
                  return <RoomCard key={index} {...element} />
                })}
            </div>
          </div>
          {/* <div>
            <div className='newest-room-content' style={{ marginTop: '20px', marginBottom: '20px' }}>
              {roomList2.map((element, index) => {
                return <RoomCard key={index} {...element} />
              })}
            </div>
          </div> */}
        </Carousel>
        {roomList && roomList.length > 3 && (
          <div style={{ textAlign: 'center', marginTop: '48px', fontSize: '20px' }}>
            <ArrowLeftOutlined onClick={handlePrev} />
            &nbsp;&nbsp;&nbsp;
            <ArrowRightOutlined onClick={handleNext} />
          </div>
        )}
      </div>
    </div>
  )
}

export default NewestRoom
