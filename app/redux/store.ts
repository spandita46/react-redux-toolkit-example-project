import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
