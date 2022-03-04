import React from 'react'
import './Loading.less'

import { Spin } from 'antd'

const Loading: React.FC = () => {
  return (
    <div className='loading-wrapper'>
      <Spin size='large' />
    </div>
  )
}

export default Loading
