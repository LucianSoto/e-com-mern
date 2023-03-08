import axios from 'axios'

const API_URL = 'http://localhost:9000/userAuth/'
const setItem = 'LB-eComm-user'

const register = async (userData) => {
  const res = await axios.post(API_URL, userData)

  if(res.data) {
    localStorage.setItem(setItem, JSON.stringify(res.data))
  }

  return res.data
}

const login = async (userData) => {
  const res = await axios.post(API_URL + "log_in", userData)
  if(res.data) {
    localStorage.setItem(setItem, JSON.stringify(res.data))
  }
  return res.data
}


const authService = {
  register,
  login,
}

export default authService