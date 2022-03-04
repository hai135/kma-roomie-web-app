import React, { useState, useEffect } from 'react'
import './RoomList.less'

import { Link } from 'react-router-dom'

import { urlRoomNameConvert } from '../../../utils/convert'

import { getRoom, getUtility, getRoomType } from '../../../apis/RoomApi'

import UserLayout from '../../../layouts/UserLayout'
import RoomChild from './RoomChild/RoomChild'

import { Row, Col, Card, Collapse, Checkbox, Radio, Button, Pagination, Slider, Form, Empty } from 'antd'

const { Panel } = Collapse

const RoomList: React.FC = () => {
  const [roomList, setRoomList] = useState<any[]>([])
  const [utilitiesList, setUtilitiesList] = useState<any[]>([])
  const [roomTypeList, setRoomTypeList] = useState<any[]>([])
  const [totalPages, setTotalPages] = useState()
  const [form] = Form.useForm()

  const getRoomList = async () => {
    try {
      const params = {
        page: 0,
        size: 10,
      }
      const response = await getRoom(params)
      if (response.status === 200) {
        setRoomList(response.data.content)
        setTotalPages(response.data.totalPages)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getRoomTypeList = async () => {
    try {
      const response = await getRoomType()
      if (response.status === 200) {
        setRoomTypeList(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getUtilityList = async () => {
    try {
      const response = await getUtility()
      if (response.status === 200) {
        setUtilitiesList(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onFinish = async (values: any) => {
    try {
      const params: any = {
        page: 0,
        size: 10,
        utilitiesId: values.utilities?.join(','),
      }
      if (values.rentalPrice) {
        params.startRentalPrice = values.rentalPrice[0] * 1000000
        params.endRentalPrice = values.rentalPrice[1] * 1000000
      }
      if (values.roomTypeId !== undefined) {
        params.roomTypeId = values.roomTypeId?.join(',')
      }
      if (values.gender) {
        params.gender = values.gender
      }
      const response = await getRoom(params)
      if (response.status === 204) {
        setRoomList([])
      }
      if (response.status === 200) {
        setRoomList(response.data.content)
        setTotalPages(response.data.totalPages)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRoomList()
    getUtilityList()
    getRoomTypeList()
  }, [])

  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  }

  const marks = {
    0: '0tr',
    15: '15tr+',
  }

  return (
    <UserLayout>
      <div className='room-list-wrapper container'>
        <Row gutter={24}>
          <Col span={6}>
            <Form form={form} onFinish={onFinish} initialValues={{ rentalPrice: [0, 15] }}>
              <Card
                className='room-list-search-box'
                title='Bộ lọc'
                extra={
                  <Form.Item>
                    <Button type='ghost' htmlType='submit'>
                      Áp dụng
                    </Button>
                  </Form.Item>
                }
              >
                <Collapse expandIconPosition='right' ghost>
                  {/* <Panel header='Địa điểm' key='1' style={{ borderBottom: '1px solid #F0F0F0' }}>
                  <div>123</div>
                </Panel> */}
                  <Panel header='Giá' key='2' style={{ borderBottom: '1px solid #F0F0F0' }}>
                    <Form.Item name='rentalPrice'>
                      <Slider range marks={marks} max={15} />
                    </Form.Item>
                  </Panel>
                  <Panel header='Tiện ích' key='3' style={{ borderBottom: '1px solid #F0F0F0' }}>
                    <Form.Item>
                      {utilitiesList && (
                        <Form.Item name='utilities'>
                          <Checkbox.Group
                            style={{ width: '100%' }}
                            options={utilitiesList.map((element) => ({
                              label: element.name,
                              value: element.id,
                            }))}
                          />
                        </Form.Item>
                      )}
                    </Form.Item>
                  </Panel>
                  <Panel header='Loại phòng' key='4' style={{ borderBottom: '1px solid #F0F0F0' }}>
                    <Form.Item>
                      {roomTypeList && (
                        <Form.Item name='roomTypeId'>
                          <Checkbox.Group
                            style={{ width: '100%' }}
                            options={roomTypeList.map((element) => ({
                              label: element.name,
                              value: element.id,
                            }))}
                          />
                        </Form.Item>
                      )}
                    </Form.Item>
                  </Panel>
                  <Panel header='Giới tính' key='5'>
                    <Form.Item name='gender'>
                      <Radio.Group>
                        <Radio style={radioStyle} value={1}>
                          Tất cả
                        </Radio>
                        <Radio style={radioStyle} value={2}>
                          Nam
                        </Radio>
                        <Radio style={radioStyle} value={3}>
                          Nữ
                        </Radio>
                      </Radio.Group>
                    </Form.Item>
                  </Panel>
                </Collapse>
              </Card>
            </Form>
          </Col>
          <Col span={18}>
            <Card title='Danh sách phòng' className='room-list-content'>
              {roomList.map((element, index) => {
                return (
                  <Link to={`/room/${urlRoomNameConvert(element.roomInformation.name)}/${element.id}`} key={index}>
                    <RoomChild {...element} />
                  </Link>
                )
              })}
              {roomList.length == 0 ? (
                <Empty description={<span>Không tìm thấy phòng phù hợp</span>}></Empty>
              ) : (
                <Pagination total={totalPages} pageSize={10} style={{ textAlign: 'center' }} />
              )}
            </Card>
          </Col>
        </Row>
      </div>
    </UserLayout>
  )
}

export default RoomList
