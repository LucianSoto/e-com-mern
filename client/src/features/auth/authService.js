import axios from 'axios'

const API_URL = 'http://localhost:9000/userAuth'

const register = async (userData) => {
  const res = await axios.post(API_URL, userData)

  console.log(userData, 'in service')

  if(res.data) {
    localStorage.setItem('user', JSON.stringify(res.data))
  }

  return res.data
}


const authService = {
  register,
}

export default authService