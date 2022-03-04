import { notification } from 'antd'
import { IconType } from 'antd/lib/notification'

export const sendNotification = (type: IconType, message: string, description: string) => {
  notification[type]({
    message: message,
    description: description,
  })
}
