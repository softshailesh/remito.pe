import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slice/authSlice"
import enquiryReducer from "./slice/enquirySlice";


const store = configureStore({
  reducer: {
   auth: authReducer,
   enquiry: enquiryReducer,
  },
})

export default store
