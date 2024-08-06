import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authslice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export default store;
