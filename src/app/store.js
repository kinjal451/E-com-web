import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../cartlist/cartSlice'
export const store = configureStore({
  reducer: {
    cartlist : cartReducer
  },
})