import AxiosClient from '../utils/AxiosClient'

export const getListUser = (body: any) => {
  const url = `/users/`
  return AxiosClient.get(url, body)
}
export const getProfile = (body?: any) => {
  const url = `/user/me`
  return AxiosClient.get(url, body)
}
export const updateProfile = (body: any) => {
  const url = `/user/me`
  return AxiosClient.put(url, body)
}
