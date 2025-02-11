import {configureStore}  from '@reduxjs/toolkit'
// import countSlice from './slices/countSlice'
// import { cakeReducer } from '../cake/cakeReducer'
// import cakeSlice from './slices/cakeSlice'
import countSlice from './slices/countSlice'
import cakeSlice from './slices/cakeSlice'
import laptopSlice from './slices/laptopSlice'
import userReducer from './slices/userSlice'


export var store = configureStore({
  reducer: {
    count:countSlice,
    cake: cakeSlice,
    laptop: laptopSlice,
    user:userReducer
  }
})