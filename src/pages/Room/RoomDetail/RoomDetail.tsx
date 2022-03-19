import React, { useState, useEffect } from 'react'
import './RoomDetail.less'

import image1 from '../../../assets/images/SB-ATL-ZookHome-9-e1538165814448.jpg'
import image2 from '../../../assets/images/1.jpg'
import image3 from '../../../assets/images/2.jpg'
import image4 from '../../../assets/images/3.jpg'

const images = [image1, image2, image3, image4]
import avatar from '../../../assets/images/Avatar.jpg'

import { currencyConvert } from '../../../utils/convert'

import { getRoomById } from '../../../apis/RoomApi'

import UserLayout from '../../../layouts/UserLayout'

import dayjs from 'dayjs'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faExclamation, faInfo, faUser, faHome } from '@fortawesome/free-solid-svg-icons'

import { Row, Col, Image, Typography, Breadcrumb, Card, Button, Alert, Modal, Avatar } from 'antd'

const { Title, Text, Paragraph } = Typography

const RoomDetail: React.FC = (props: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [room, setRoom] = useState<any>(null)
  const a = images[Math.floor(Math.random() * 4)]
  const getRoom = async () => {
    try {
      const response = await getRoomById(props.match.params.id)
      console.log(response.data)
      console.log(response.data.utilities)
      setRoom(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRoom()
  }, [])

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <UserLayout>
      {room != null && (
        <div className='room-detail-wrapper container'>
          <Image.PreviewGroup>
            <Row className='room-detail-image' align='middle' justify='center'>
              <Col span={12} style={{ width: '200%', overflow: 'hidden' }}>
                <Image src={room.imageUrl} />
              </Col>
              {/*<Col span={12}>*/}
              {/*  <Row gutter={[0, 0]}>*/}
              {/*    <Col span={12}>*/}
              {/*      <Image src={room.imageUrl} />*/}
              {/*    </Col>*/}
              {/*    <Col span={12}>*/}
              {/*      <Image src={room.imageUrl} />*/}
              {/*    </Col>*/}
              {/*  </Row>*/}
              {/*  <Row>*/}
              {/*    <Col span={12}>*/}
              {/*      <Image src={room.imageUrl} />*/}
              {/*    </Col>*/}
              {/*    <Col span={12}>*/}
              {/*      <Image src={room.imageUrl} />*/}
              {/*    </Col>*/}
              {/*  </Row>*/}
              {/*</Col>*/}
            </Row>
          </Image.PreviewGroup>

          <Row className='room-detail-title'>
            <Col span={18}>
              <Title level={3}>{room.roomInformation.name}</Title>
              <Breadcrumb>
                <Breadcrumb.Item>{room.roomAddress.city}</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href=''>{room.roomAddress.district}</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{room.roomAddress.streetName}</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
            <Col span={6} style={{ textAlign: 'right' }}>
              <Button
                type='primary'
                size='large'
                icon={<FontAwesomeIcon icon={faExternalLinkAlt} />}
                onClick={showModal}
              >
                Chia sẻ
              </Button>
              <Modal title='Chia sẻ' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <Title level={5} style={{ textAlign: 'center' }}>
                  {room.roomInformation.name}
                </Title>
                <Text style={{ fontSize: '12px', color: '#666666' }}>LIÊN KẾT</Text>
                <br />
                <Text>{window.location.href}</Text>
              </Modal>
            </Col>
          </Row>

          <Row className='room-detail-information' gutter={24}>
            <Col span={16} className='room-information'>
              <Card>
                <Title level={4}>
                  <FontAwesomeIcon icon={faHome} style={{ color: '#3b82f6' }} />
                  Thông tin phòng
                </Title>
                <Row style={{ marginTop: '24px' }}>
                  <Col span={6}>
                    <div className='room-information-title'>giá phòng</div>
                    <div>
                      {currencyConvert(room.roomExpense.rentalPrice).price}{' '}
                      {currencyConvert(room.roomExpense.rentalPrice).unit} đồng
                    </div>
                  </Col>
                  <Col span={6}>
                    <div className='room-information-title'>diện tích</div>
                    <div>{room.roomInformation.roomArea} mét vuông</div>
                  </Col>
                  <Col span={6}>
                    <div className='room-information-title'>đặt cọc</div>
                    <div>
                      {currencyConvert(room.roomExpense.deposit).price} {currencyConvert(room.roomExpense.deposit).unit}{' '}
                      đồng
                    </div>
                  </Col>
                  <Col span={6}>
                    <div className='room-information-title'>sức chứa</div>
                    <div>
                      {room.roomInformation.roomCapacity} {room.roomInformation.gender == 1 && 'NAM hoặc NỮ'}{' '}
                      {room.roomInformation.gender == 2 && 'NAM'} {room.roomInformation.gender == 3 && 'NỮ'}
                    </div>
                  </Col>
                </Row>
                <Row style={{ marginTop: '24px' }}>
                  <Col span={6}>
                    <div className='room-information-title'>ngày đăng</div>
                    <div>{dayjs(room.createdAt).format('DD-MM-YYYY')}</div>
                  </Col>
                  <Col span={6}>
                    <div className='room-information-title'>trạng thái</div>
                    <div className='room-status'>Còn phòng</div>
                  </Col>
                  <Col span={6}>
                    <div className='room-information-title'>xác thực</div>
                    <div className='room-status' style={{ color: room.admin ? '#1edb4c' : 'red' }}>
                      {room.admin ? 'Đã được xác thực' : 'Chưa được xác thực'}
                    </div>
                  </Col>
                </Row>
                <Row style={{ marginTop: '24px' }}>
                  <Col span={24}>
                    <div className='room-information-title'>địa chỉ</div>
                    <div>
                      Số {room.roomAddress.houseNumber}&nbsp;
                      {room.roomAddress.streetName},&nbsp;
                      {room.roomAddress.ward},&nbsp;
                      {room.roomAddress.district},&nbsp;
                      {room.roomAddress.city}
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={8} className='user-information'>
              <Card>
                <Title level={4}>
                  <FontAwesomeIcon icon={faUser} style={{ color: '#4877F7' }} />
                  Thông tin chủ phòng
                </Title>
                <Row>
                  <Col span={5}>
                    <Avatar size={64}>{room.user.info.lastName.charAt(0)}</Avatar>
                  </Col>
                  <Col span={19}>
                    <div>
                      <span style={{ fontWeight: 'bold' }}>
                        {room.user.info.lastName} {room.user.info.firstName}
                      </span>
                    </div>
                    <div>
                      <span>{room.user.info.phone}</span>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

          <Row className='room-detail-utility' gutter={24}>
            <Col span={16}>
              <Card>
                <Title level={4}>Tiện ích</Title>
                <Row wrap gutter={[0, 12]}>
                  {room.utilities.map((element: any, index: any) => {
                    return (
                      <Col span={6} key={index}>
                        <Text>{element.name}</Text>
                      </Col>
                    )
                  })}
                </Row>
              </Card>
            </Col>
          </Row>

          <Row className='room-detail-note' gutter={24}>
            <Col span={16}>
              <Card>
                <Title level={4}>
                  <FontAwesomeIcon icon={faExclamation} style={{ color: '#E64926' }} />
                  Lưu ý
                </Title>
                <Text style={{ fontSize: '20px' }}>Sức chứa</Text>
                {room.roomInformation.roomCapacity != 1 ? (
                  <Row gutter={14}>
                    <Col span={8}>
                      <div className='room-detail-note-title'>Rộng</div>
                      <Alert
                        message={`${room.roomInformation.roomCapacity - 1} người`}
                        type='success'
                        style={{ textAlign: 'center' }}
                      />
                    </Col>
                    <Col span={8}>
                      <div className='room-detail-note-title'>Vừa</div>
                      <Alert
                        message={`${room.roomInformation.roomCapacity} người`}
                        type='warning'
                        style={{ textAlign: 'center' }}
                      />
                    </Col>
                    <Col span={8}>
                      <div className='room-detail-note-title'>Chật</div>
                      <Alert
                        message={`${room.roomInformation.roomCapacity + 1} người +`}
                        type='error'
                        style={{ textAlign: 'center' }}
                      />
                    </Col>
                  </Row>
                ) : (
                  <Row gutter={14}>
                    <Col span={12}>
                      <div className='room-detail-note-title'>Vừa</div>
                      <Alert
                        message={`${room.roomInformation.roomCapacity} người`}
                        type='warning'
                        style={{ textAlign: 'center' }}
                      />
                    </Col>
                    <Col span={12}>
                      <div className='room-detail-note-title'>Chật</div>
                      <Alert
                        message={`${room.roomInformation.roomCapacity + 1} người +`}
                        type='error'
                        style={{ textAlign: 'center' }}
                      />
                    </Col>
                  </Row>
                )}
              </Card>
            </Col>
          </Row>

          <Row className='room-detail-description' gutter={24}>
            <Col span={16}>
              <Card>
                <Title level={4}>
                  <FontAwesomeIcon icon={faInfo} style={{ color: '#8B572A' }} />
                  Mô tả thêm
                </Title>
                <Paragraph>{room.roomInformation.description}</Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </UserLayout>
  )
}

export default RoomDetail
