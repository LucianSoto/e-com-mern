import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

const user = JSON.parse(localStorage.getItem('LB-eComm-user'))

//////// INITIAL STATE MUST BE DECLARED AS "initialState" OR APP WILL NOT LOAD /////////
const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

export const register = createAsyncThunk(
  'auth/',
  async (user, thunkAPI) => {
    try{
      return await authService.register(user)
    } catch (error) {
      const message = 
      ( error.response &&
        error.response.data &&
        error.response.data.message) ||
        error.message || 
        error.toString()
        return thunkAPI.rejectWithValue(message) 
    }
  }
)
    
export const registerGoogle = createAsyncThunk(
  'register_google',
  async(token, thunkAPI)=> {
    try{
      return await authService.googleRegister(token)
    } catch (error) {
    const message = (
      error.response && 
      error.response.data &&
      error.response.data.message
    ) ||
    error.message ||
    error.toString()
    return thunkAPI.rejectWithValue(message)
    }
  }
)

export const loginGoogle = createAsyncThunk(
  'login google',
  async(token, thunkAPI) => {
    try {
      return await authService.googleLogin(token)
    } catch (error) {
      const message = (
      error.response && 
      error.response.data &&
      error.response.data.message
    ) ||
    error.message ||
    error.toString()
    return thunkAPI.rejectWithValue(message)
    }
  }
)

export const login = createAsyncThunk(
  'log_in',
  async(user, thunkAPI) => {
    try {
      return await authService.login(user)
    } catch (error) {
      const message = 
      ( error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const logout = createAsyncThunk(
  'log_out',
  async() => {
    await authService.logout()
})

export const passwordReset = createAsyncThunk(
  'password_reset',
  async(data, thunkAPI)=> {
    try{
      return await authService.resetPassword(data)
    } catch (error) {
      const message =
      ( error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = true
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = true
        state.isSuccess = false
        state.message = action.payload
        state.user = null
      })
      .addCase(registerGoogle.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerGoogle.fulfilled, (state, action) => {
        state.isLoading = true
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(registerGoogle.rejected, (state, action) => {
        state.isLoading = true
        state.isSuccess = false
        state.message = action.payload
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = true
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = true
        state.isSuccess = false
        state.message = action.payload
        state.user = null
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
      .addCase(loginGoogle.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginGoogle.fulfilled, (state, action) => {
        state.isLoading = true
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(loginGoogle.rejected, (state, action) => {
        state.isLoading = true
        state.isSuccess = false
        state.message = action.payload
        state.user = null
      })
    },
})

export const { reset } = authSlice.actions
export default authSlice.reducer