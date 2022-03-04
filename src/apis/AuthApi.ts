import AxiosClient from '../utils/AxiosClient'

export const signIn = (body: any) => {
  const url = `/signin`
  return AxiosClient.post(url, body)
}
export const signUp = (body: any) => {
  const url = `/signup`
  return AxiosClient.post(url, body)
}
export const getCurrentUser = () => {
  const accessToken = localStorage.getItem('accessToken')
  const url = `/getCurrentUser/${accessToken}`
  return AxiosClient.get(url)
}

export const signOut = () => {
  const url = `/signout`
  return AxiosClient.post(url)
}
