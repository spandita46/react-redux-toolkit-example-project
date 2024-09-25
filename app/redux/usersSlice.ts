import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SVCHelper from "~/core/service";

export type userState = {
  users: {
    name: string;
    age: number;
  }[];
  loading: boolean;
  error?: string;
};

const initialUserState: userState = {
  users: [],
  loading: false,
  error: undefined,
};

export const fetchUserData = createAsyncThunk("users/fetch", async () => {
  const response = await SVCHelper.get("/users");
  return response;
});

const usersSlice = createSlice({
  name: "users",
  initialState: initialUserState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = false;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
