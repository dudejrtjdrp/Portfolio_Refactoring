import { configureStore } from '@reduxjs/toolkit'
import isLoginReducer from '../Slices/isLoginSlice'
import isUserNumberReducer from '../Slices/isUserNumber'

export default configureStore({
  reducer: {
    isLogin: isLoginReducer,
    isUserNumber : isUserNumberReducer,
  },
})