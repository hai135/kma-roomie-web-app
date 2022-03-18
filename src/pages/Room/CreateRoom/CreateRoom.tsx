import React, { useState } from 'react'
import './CreateRoom.less'

import { PATH } from '../../../constants/path'

import { useHistory } from 'react-router-dom'

import { createRoom } from '../../../apis/RoomApi'

import UserLayout from '../../../layouts/UserLayout'
import RoomInformation from './RoomInformation'
import RoomAddress from './RoomAddress'
import RoomUtility from './RoomUtility'
import RoomConfirm from './RoomConfirm'

import { Card, Steps, Button, Form, message } from 'antd'

const { Step } = Steps

import { sendNotification } from '../../../utils/Notification'

interface ISteps {
  step: number
  title: string
  content: JSX.Element
}

const srcImage = [
  'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/290170403.jpg?k=e05bebe1118dfe44249257a457c891f4ca07b78f18773cea28098d2098857cf5&o=',
  'https://www.vietnambooking.com/wp-content/uploads/2018/06/tieu-chuan-xep-hang-sao-khach-san-4-1-2019-e1578107835581.jpg',
  'https://inhat.vn/wp-content/uploads/2020/11/khach-san-pho-co-o-ha-noi2.jpg',
  'https://thiennhuong.com/wp-content/uploads/2022/03/khach-san-thu-binh-duong-1.jpg',
  'https://allimages.sgp1.digitaloceanspaces.com/phuotorg/2020/10/1601605166_20-khach-san-nha-nghi-Binh-Duong-gia-re-dep.jpg',
]

const CreateRoom: React.FC = () => {
  const [current, setCurrent] = useState(0)
  const [form] = Form.useForm()
  const history = useHistory()

  const onFinish = async (values: any) => {
    if (current == 0) {
      // const err = []
      // if (values.roomType === undefined) {
      //   err.push('Vui lòng chọn loại phòng')
      // }
      // if (values.gender === undefined) {
      //   err.push('Vui lòng chọn giới tính')
      // }
      // if (values.roomArea === undefined) {
      //   err.push('Vui lòng nhâp vào diện tích')
      // }
      // if (values.roomCapacity === undefined) {
      //   err.push('Vui lòng nhập sức chứa')
      // }
      // if (values.rentalPrice === undefined) {
      //   err.push('Vui lòng nhập tiền phòng')
      // }
      // if (values.deposit === undefined) {
      //   err.push('Vui lòng nhập tiền cọc')
      // }
      // if (values.electricityCost === undefined) {
      //   err.push('Vui lòng nhập tiền điện')
      // }
      // if (values.waterCost === undefined) {
      //   err.push('Vui lòng nhập tiền nước')
      // }
      // if (values.internetCost === undefined) {
      //   err.push('Vui lòng nhập tiền internet/ truyền hình cáp')
      // }
      // err.map((e) => {
      //   message.error(e)
      // })
      // if (err.length != 0) {
      //   setCurrent(current + 1)
      // }
      setCurrent(current + 1)
    } else if (current == 1) {
      setCurrent(current + 1)
    } else if (current == 2) {
      setCurrent(current + 1)
    } else {
      const utilities: any = []
      values.utilities?.map((e: any) => {
        const utility = {
          id: e,
        }
        utilities.push(utility)
      })
      const body = {
        roomInformation: {
          name: values.name,
          gender: values.gender,
          phone: values.phone,
          description: values.description,
          openTime: values.openTime,
          closeTime: values.closeTime,
          roomArea: values.area,
          roomCapacity: values.capacity,
          roomType: {
            id: values.roomType,
          },
        },
        roomExpense: {
          rentalPrice: values.rentalPrice,
          deposit: values.deposit,
          electricityCost: values.electricityCost,
          waterCost: values.waterCost,
          internetCost: values.internetCost,
          parkingCost: values.parkingCost,
        },
        roomAddress: {
          city: values.city,
          district: values.district,
          ward: values.ward,
          streetName: values.streetName,
          houseNumber: values.houseNumber,
        },
        imageUrl: srcImage[Math.floor(Math.random() * 4)],
        utilities: utilities,
      }
      const response = await createRoom(body)
      if (response.status === 200) {
        history.push(PATH.HOME)
        sendNotification('success', 'Đăng phòng thành công!', '')
      } else {
        sendNotification('error', 'Đăng phòng thất bại!', '')
      }
    }
  }

  const handlePrev = () => {
    setCurrent(current - 1)
  }

  const steps: ISteps[] = [
    {
      step: 1,
      title: 'Thông tin',
      content: <RoomInformation />,
    },
    {
      step: 2,
      title: 'Địa chỉ',
      content: <RoomAddress />,
    },
    {
      step: 3,
      title: 'Tiện ích',
      content: <RoomUtility />,
    },
    {
      step: 4,
      title: 'Xác nhận',
      content: <RoomConfirm />,
    },
  ]
  return (
    <UserLayout>
      <div className='create-room-wrapper container'>
        <Card className='create-room-content'>
          <Steps current={current} style={{ marginBottom: '48px' }}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <Card>
            <Form form={form} onFinish={onFinish}>
              {steps.map((item: ISteps, key) => (
                <div key={key} className={`steps-content ${item.step !== current + 1 && 'hidden'}`}>
                  {item.content}
                </div>
              ))}
              <div className='steps-action' style={{ textAlign: 'right', marginTop: '24px' }}>
                {current > 0 && (
                  <Button style={{ margin: '0 8px' }} onClick={() => handlePrev()}>
                    Quay lại
                  </Button>
                )}
                {current < steps.length - 1 ? (
                  <Button type='primary' htmlType='submit'>
                    Tiếp theo
                  </Button>
                ) : (
                  <Button type='primary' htmlType='submit'>
                    Đăng phòng
                  </Button>
                )}
              </div>
            </Form>
          </Card>
        </Card>
      </div>
    </UserLayout>
  )
}

export default CreateRoom
