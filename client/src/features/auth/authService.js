import axios from 'axios'

const API_URL = 'http://localhost:9000/userAuth'

const register = async (userData) => {
  const res = await axios.post(API_URL, userData)

  if(res.data) {
    localStorage.setItem('LB-eComm-user', JSON.stringify(res.data))
  }

  return res.data
}

const login = async (userData) => {
  const res = await axios.post(API_URL, userData)

  if(res.data) {
    
  }

  return res.data
}


const authService = {
  register,
  login,
}

export default authService