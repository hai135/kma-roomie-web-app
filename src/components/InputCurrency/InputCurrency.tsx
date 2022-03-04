import React from 'react'

import { InputNumber } from 'antd'

const InputCurrency: React.FC<any> = (props) => {
  return (
    <InputNumber
      size='large'
      formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={(value: any) => value.replace(/\$\s?|(,*)/g, '')}
      style={{ width: '100%' }}
      min={0}
      {...props}
    />
  )
}

export default InputCurrency
