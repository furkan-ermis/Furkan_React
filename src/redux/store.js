import { configureStore } from "@reduxjs/toolkit";
import CommerceSlice from "./slices/CommerceSlice";
import UserSlice from "./slices/UserSlice";
import BlogSlice from "./slices/BlogSlice";

const store = configureStore({
  reducer: {
    CommerceSlice,
    UserSlice,
    BlogSlice,
  },
});

export default store;
