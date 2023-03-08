import axios from 'axios'

const API_URL = 'http://localhost:9000/userAuth/'
const localStorageUser = 'LB-eComm-user'

const register = async (userData) => {
  const res = await axios.post(API_URL, userData)

  if(res.data) {
    localStorage.setItem(localStorageUser, JSON.stringify(res.data))
  }

  return res.data
}

const login = async (userData) => {
  const res = await axios.post(API_URL + "log_in", userData)
  if(res.data) {
    localStorage.setItem(localStorageUser, JSON.stringify(res.data))
  }
  return res.data
}

const logout = async () => {
  localStorage.removeItem(localStorageUser)
}


const authService = {
  register,
  login,
  logout,
}

export default authService