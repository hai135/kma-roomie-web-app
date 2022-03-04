import axios from 'axios'
import queryString from 'querystring'

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
  paramsSerializer: (params) => queryString.stringify(params),
})

axiosClient.interceptors.request.use(async (config) => config)

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data
    }
    return response
  },
  (error) => {
    throw error
  }
)

export default axiosClient
