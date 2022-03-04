const initValue = JSON.parse(localStorage.getItem('user') || '') || {}

const userReducer = (state = initValue, action: any) => {
  switch (action.type) {
    case 'SET_USER':
      const data = JSON.parse(localStorage.getItem('user') || '')
      const newData = {
        ...data,
        ...action.payload,
      }
      localStorage.setItem('user', newData)
      return newData
    case 'LOG_OUT':
      localStorage.clear()
      return {
        ...state,
      }
    default:
      return state
  }
}

export default userReducer
