import { configureStore } from "@reduxjs/toolkit";
import resturentSlice from "./resturentSlice";
import userAuth from "./userAuth";
 
const store = configureStore({
  reducer: {
    data: resturentSlice,
    auth : userAuth
  },
});

export default store;