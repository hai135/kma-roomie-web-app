import React from 'react'
import { useHistory } from 'react-router-dom'
import { Result, Button } from 'antd'

const NotFound: React.FC = () => {
  const history = useHistory()
  const backHome = () => history.push('/')
  return (
    <Result
      status='404'
      title='404'
      subTitle='Xin lỗi, trang bạn truy cập không tồn tại.'
      extra={
        <Button type='primary' onClick={backHome}>
          Quay về trang chủ
        </Button>
      }
    />
  )
}
export default NotFound
