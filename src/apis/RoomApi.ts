import AxiosClient from '../utils/AxiosClient'

export const getRoom = (params?: any) => {
  const url = `/api/rooms`
  return AxiosClient.get(url, { params })
}

export const createRoom = (body: any) => {
  const url = `/api/rooms`
  return AxiosClient.post(url, body)
}

export const getRoomById = (id: number) => {
  const url = `/api/rooms/${id}`
  return AxiosClient.get(url)
}

export const deleteRoom = (id: number) => {
  const url = `/api/rooms/${id}`
  return AxiosClient.delete(url)
}

export const getUtility = () => {
  const url = `/api/rooms/utility`
  return AxiosClient.get(url)
}

export const getRoomType = () => {
  const url = `/api/rooms/roomType`
  return AxiosClient.get(url)
}

export const getUserRoom = (params: any) => {
  const url = `/api/rooms`
  return AxiosClient.get(url, { params })
}
