import React, { useState, useEffect } from 'react'
import './CreateRoom.less'

import { getUtility } from '../../../apis/RoomApi'

import { Form, Typography, Select, Upload, message } from 'antd'
import { InboxOutlined } from '@ant-design/icons'

const { Title } = Typography
const { Dragger } = Upload
const { Option } = Select

const RoomUtility: React.FC = () => {
  const [utilitiesList, setUtilitiesList] = useState<any[]>([])

  const getUtilityList = async () => {
    try {
      const response = await getUtility()
      console.log(response)
      if (response.status === 200) {
        setUtilitiesList(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUtilityList()
  }, [])

  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info: any) {
      const { status } = info.file
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
  }

  return (
    <div>
      <Title style={{ textAlign: 'center' }}>Thông tin hình ảnh và tiện ích</Title>
      <Title level={4}>Hình ảnh</Title>
      <Dragger {...props} style={{ marginBottom: '10px' }}>
        <p className='ant-upload-drag-icon'>
          <InboxOutlined />
        </p>
        <p className='ant-upload-text'>Bấm vào đây để đăng hình từ thư viện nhé!</p>
      </Dragger>
      <Title level={4}>Tiện ích</Title>
      <Form.Item name='utilities'>
        <Select mode='multiple' allowClear style={{ width: '100%' }} placeholder='Vui lòng chọn tiện ích'>
          {utilitiesList.map((element, index) => {
            return (
              <Option key={index} value={element.id}>
                {element.name}
              </Option>
            )
          })}
        </Select>
      </Form.Item>
    </div>
  )
}

export default RoomUtility
