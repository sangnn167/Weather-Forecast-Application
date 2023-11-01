import { configureStore } from '@reduxjs/toolkit'
import couterReducer from './slices/search.slice'

export default configureStore({
  reducer: {
    weather: couterReducer
  }
})