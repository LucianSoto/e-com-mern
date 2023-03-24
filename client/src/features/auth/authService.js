import axios from 'axios'

const API_URL = 'http://localhost:9000/userAuth/'
const localStorageUser = 'LB-eComm-user'

const register = async (userData) => {
  const res = await axios.post(API_URL + 'register', userData)

  if(res.data) {
    localStorage.setItem(localStorageUser, JSON.stringify(res.data))
  }

  return res.data
}

const googleRegister = async (accessToken)  => {
  console.log('in service')
  const res = await axios.post(API_URL + 'register', {googleAccessToken: accessToken})

  if(res.data) {
    localStorageUser.setItem(localStorageUser, JSON.stringify(res.data))
  }

  return res.data
}

const googleLogin = async (accessToken) => {
  const res = await axios.post(API_URL + "log_in", {googleAccessToken: accessToken})

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
  googleRegister,
  googleLogin,
  login,
  logout,
}

export default authService