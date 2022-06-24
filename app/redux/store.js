import { configureStore } from "@reduxjs/toolkit";
import blogSlice from './slice'

export default configureStore({
    reducer: blogSlice
})